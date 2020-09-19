import 'dart:io';

import 'package:flutter/material.dart';
import 'package:flutter_svg/flutter_svg.dart';
import 'package:pf_mobile_application/constant.dart';

class AboutScreen extends StatefulWidget {
  @override
  _AboutScreenState createState() => _AboutScreenState();
}

class _AboutScreenState extends State<AboutScreen> {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        backgroundColor: C_DeathColor,
        title: Text("About"),
        leading: BackButton(
          onPressed: () => {Navigator.pop(context)},
        ),
      ),
      body: Container(
        margin: EdgeInsets.all(10),
        child: Center(
          child: Column(
            mainAxisAlignment: MainAxisAlignment.spaceEvenly,
            children: [
              SvgPicture.asset('assets/icons/pf-logo.svg', fit: BoxFit.contain),
              DefaultTextStyle(
                style: DefaultTextStyle.of(context).style,
                child: RichText(
                  text: TextSpan(
                      text:
                          "Welcome to the first stable release of the PF mobile application\n\n",
                      style: TextStyle(color: C_TitleTextColor, fontSize: 18),
                      children: <TextSpan>[
                        TextSpan(text: '- Idea by Kristine Kir\n'),
                        TextSpan(
                            text:
                                '- Developed by Benjamin. Student at DTU in cooperation with PF.'),
                      ]),
                ),
              )
            ],
          ),
        ),
      ),
    );
  }
}
