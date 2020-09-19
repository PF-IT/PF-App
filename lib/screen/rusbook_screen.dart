import 'package:flutter/material.dart';
import 'package:flutter_svg/svg.dart';
import 'package:pf_mobile_application/constant.dart';
import 'package:flutter_markdown/flutter_markdown.dart';
import 'package:pf_mobile_application/generated/l10n.dart';
import 'package:url_launcher/url_launcher.dart';
import 'package:pf_mobile_application/constant.dart';
import 'package:pf_mobile_application/util/utils.dart';
import 'package:cached_network_image/cached_network_image.dart';

import '../environment_config.dart';

class RusbookScreen extends StatefulWidget {
  Future<String>
      data; // The data field to fill when calling this widget ex. on route
  RusbookScreen(this.data);

  @override
  _RusbookScreenState createState() => _RusbookScreenState();
}

class _RusbookScreenState extends State<RusbookScreen> {
  final ScrollController _scrollController = ScrollController();

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        backgroundColor: C_DeathColor,
        leading: CloseButton(
          onPressed: () => {Navigator.pop(context)},
        ),
      ),
      body: Container(
        margin: EdgeInsets.all(10),
        child: FutureBuilder<String>(
          future: widget.data,
          builder: (BuildContext context, AsyncSnapshot<String> snapshot) {
            Widget child;
            if (snapshot.hasData) {
              child = Scrollbar(
                  isAlwaysShown: true,
                  controller: _scrollController,
                  child: buildMarkdown(snapshot.data));
            } else if (snapshot.hasError) {
              child = Center(
                child: Column(
                  mainAxisAlignment: MainAxisAlignment.center,
                  crossAxisAlignment: CrossAxisAlignment.center,
                  children: <Widget>[
                    Icon(
                      Icons.error_outline,
                      color: Colors.red,
                      size: 60,
                    ),
                    Padding(
                      padding: const EdgeInsets.only(top: 16),
                      child: Text('${S.current.error_warn}: ${snapshot.error}'),
                    )
                  ],
                ),
              );
            } else {
              child = Center(
                child: Column(
                  mainAxisAlignment: MainAxisAlignment.center,
                  crossAxisAlignment: CrossAxisAlignment.center,
                  children: <Widget>[
                    SizedBox(
                      child: CircularProgressIndicator(),
                      width: 60,
                      height: 60,
                    ),
                    Padding(
                      padding: EdgeInsets.only(top: 16),
                      child: Text(S.current.prepping_warn,
                          style: C_SubheadingTextStyle),
                    )
                  ],
                ),
              );
            }
            return child;
          },
        ),
      ),
    );
  }

  Widget buildMarkdown(String data) => Markdown(
        controller: _scrollController,
        shrinkWrap: true,
        data: data,
        onTapLink: (url) => launchURL(url),
        selectable: true,
        //imageDirectory: '${EnvironmentConfig.app_server_url}/getRusbookMedia?file=',
        imageBuilder: (Uri uri, String title, String alt) {
          return Center(
              child: CachedNetworkImage(
            imageUrl:
                '${EnvironmentConfig.APP_OAS_URL}/getRusbookMedia?file=${uri.path.split('/').last}',
            placeholder: (context, url) => CircularProgressIndicator(),
          ));
        },
        styleSheet: MarkdownStyleSheet.fromTheme(C_DefaultThemeData),
      );
}
