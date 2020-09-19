import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';
import 'package:flutter/services.dart';
import 'package:flutter_localizations/flutter_localizations.dart';
import 'package:flutter_staggered_grid_view/flutter_staggered_grid_view.dart';
import 'package:flutter_svg/flutter_svg.dart';
import 'package:intl/intl.dart';
import 'package:shared_preferences/shared_preferences.dart';
import 'dart:async';
import 'dart:io';

import 'constant.dart';
import 'generated/l10n.dart';
import 'model/rusbookChapter.dart';
import 'model/rusbookStorage.dart';
import 'screen/about_screen.dart';
import 'screen/rusbook_screen.dart';
import 'util/pf_connect.dart';
import 'util/utils.dart';

void main() {
  // Ensure forced portrait mode
  WidgetsFlutterBinding.ensureInitialized();
  SystemChrome.setPreferredOrientations(
      [DeviceOrientation.portraitDown, DeviceOrientation.portraitUp]);

  runApp(MyApp());

  // Sync with backend
  PFConnect.sync();
}

class MyApp extends StatelessWidget {
  // This widget is the root of your application.
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      localizationsDelegates: [
        S.delegate, // Our custom delegate from intl tool
        GlobalMaterialLocalizations.delegate,
        GlobalWidgetsLocalizations.delegate,
        GlobalCupertinoLocalizations.delegate,
      ],
      supportedLocales: S.delegate.supportedLocales,
      debugShowCheckedModeBanner: false,
      theme: C_DefaultThemeData,
      initialRoute: '/',
      routes: {
        '/': (context) => HomeScreen(),
        '/about': (context) => AboutScreen()
      },
    );
  }
}

// Stateful so we can search and animate top when scrolling
class HomeScreen extends StatefulWidget {
  HomeScreen();

  @override
  _HomeScreenState createState() => _HomeScreenState();
}

class _HomeScreenState extends State<HomeScreen> {
  List<int> _searchChapters;

  @override
  Widget build(BuildContext context) {
    final delegate = S.of(context);
    S.load(Locale('dk')); // Use system Locale when building context
    return MaterialApp(
      home: Scaffold(
        body: CustomScrollView(
          slivers: <Widget>[
            SliverAppBar(
              backgroundColor: C_BackgroundColor,
              floating: true,
              leading: IconButton(
                  icon: SvgPicture.asset("assets/icons/menu.svg",
                      fit: BoxFit.scaleDown),
                  onPressed: () => {Navigator.pushNamed(context, '/about')}),
              title: Text(delegate.pfName_msg, style: C_TitleTextStyle),
              actions: <Widget>[
                IconButton(
                  icon: SvgPicture.asset("assets/icons/pf-logo.svg",
                      fit: BoxFit.cover),
                  onPressed: () {
                    launchURL('https://www.pf.dk/');
                  },
                )
              ],
            ),
            SliverAppBar(
              backgroundColor: C_BackgroundColor,
              expandedHeight: 190,
              flexibleSpace: FlexibleSpaceBar(
                background: Padding(
                  padding: EdgeInsets.only(left: 20, top: 0, right: 20),
                  child: Column(
                    crossAxisAlignment: CrossAxisAlignment.start,
                    children: <Widget>[
                      SizedBox(height: 30),
                      Text(delegate.welcome_msg, style: C_HeadingTextStyle),
                      Text(delegate.selectChapter_msg,
                          style: C_SubheadingTextStyle),
                      SizedBox(height: 15),
                      Row(
                        mainAxisAlignment: MainAxisAlignment.spaceBetween,
                        children: <Widget>[
                          Text(delegate.chapters_msg, style: C_TitleTextStyle),
                          /*Text(
                            "Show all",
                            style: C_SubtitleTextStyle.copyWith(color: C_BlueColor),
                          )*/
                        ],
                      ),
                    ],
                  ),
                ),
              ),
            ),
            SliverStaggeredGrid.countBuilder(
                crossAxisCount: 2,
                staggeredTileBuilder: (index) => StaggeredTile.fit(1),
                itemBuilder: (context, index) {
                  return InkWell(
                    onTap: () async {
                      final prefs = await SharedPreferences.getInstance();
                      List<String> tgFile =
                          prefs.getStringList(delegate.markdownList_opt);
                      if (tgFile != null) {
                        // ToDo - Use FutureBuilder to show which chapters are available!
                        Navigator.push(
                            context,
                            CupertinoPageRoute(
                                builder: (context) => RusbookScreen(
                                    RusbookStorage.readMarkDown(
                                        tgFile[index]))));
                      }
                    },
                    child: Container(
                      margin: EdgeInsets.all(10),
                      padding: EdgeInsets.all(10),
                      height: index.isEven ? 200 : 240,
                      decoration: BoxDecoration(
                        color: C_ShadowColor,
                        borderRadius: BorderRadius.circular(16),
                        image: DecorationImage(
                          image: AssetImage(
                              rusbookChapters(Intl.getCurrentLocale())[index]
                                  .image),
                          fit: BoxFit.cover,
                        ),
                      ),
                      child: Column(
                        crossAxisAlignment: CrossAxisAlignment.start,
                        children: <Widget>[
                          Text(
                            rusbookChapters(Intl.getCurrentLocale())[index]
                                .chapterName,
                            style: C_TitleTextStyle,
                          ),
                        ],
                      ),
                    ),
                  );
                },
                itemCount: rusbookChapters(Intl.getCurrentLocale()).length)
          ],
        ),
      ),
    );
  }
}
