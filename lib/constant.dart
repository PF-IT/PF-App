import 'package:animations/animations.dart';
import 'package:flutter/material.dart';

// PF BACKEND
const C_pfBackendUrl = 'http://localhost:3000/';

// DESIGN
ThemeData C_DefaultThemeData = ThemeData(
  scaffoldBackgroundColor: C_BackgroundColor,
  fontFamily: "Poppi",
  splashColor: C_DeathColor,
  textTheme: TextTheme(
    bodyText1: C_BodyText1, // h4 h5 h6
    bodyText2: C_BodyText2, // p code listBullet tableBody
    headline5: C_HeadingTextStyle, // h1
    headline6: C_SubheadingTextStyle, // h2
  ),
  pageTransitionsTheme:
      PageTransitionsTheme(builders: <TargetPlatform, PageTransitionsBuilder>{
    TargetPlatform.android: FadeThroughPageTransitionsBuilder(),
    TargetPlatform.iOS: FadeThroughPageTransitionsBuilder(),
  }),
  visualDensity: VisualDensity.adaptivePlatformDensity,
);

const C_BackgroundColor = Color(0xFFFEFEFE);
const C_TitleTextColor = Color(0xFF303030);
const C_TextColor = Color(0xFF0D1333);
const C_BodyTextColor = Color(0xFF4B4B4B);
const C_TextLightColor = Color(0xFF959595);
const C_InfectedColor = Color(0xFFFF8748);
const C_DeathColor = Color(0xFFFF4848);
const C_Recovercolor = Color(0xFF36C12C);
const C_PrimaryColor = Color(0xFF3382CC);
final C_ShadowColor = Color(0xFFB7B7B7).withOpacity(.16);
final C_ActiveShadowColor = Color(0xFF4056C6).withOpacity(.15);
const C_BlueColor = Color(0xFF6E8AFA);
const C_BestSellerColor = Color(0xFFFFD073);
const C_GreenColor = Color(0xFF49CC96);

const C_pf_1 = Color.fromRGBO(0, 159, 227, 1);
const C_pf_2 = Color.fromRGBO(197, 26, 27, 1);
const C_pf_3 = Color.fromRGBO(230, 0, 126, 1);
const C_pf_4 = Color.fromRGBO(149, 193, 31, 1);
const C_pf_5 = Color.fromRGBO(58, 170, 53, 1);
const C_pf_6 = Color.fromRGBO(246, 216, 136, 1);
const C_pf_7 = Color.fromRGBO(242, 141, 110, 1);
const C_pf_8 = Color.fromRGBO(234, 84, 51, 1);
const C_pf_9 = Color.fromRGBO(246, 239, 215, 1);
const C_pf_10 = Color.fromRGBO(114, 202, 235, 1);
const C_pf_11 = Color.fromRGBO(69, 179, 132, 1);
const C_pf_12 = Color.fromRGBO(0, 161, 154, 1);
const C_pf_13 = Color.fromRGBO(29, 113, 184, 1);

const C_HeadingTextStyle = TextStyle(
  fontSize: 28,
  color: C_TextColor,
  fontWeight: FontWeight.bold,
);

const C_SubheadingTextStyle = TextStyle(
  fontSize: 24,
  color: Color(0xFF61688B),
  height: 2,
);

const C_BodyText1 = TextStyle(
  fontSize: 16,
  color: C_TitleTextColor,
);

const C_BodyText2 = TextStyle(
  fontSize: 14,
  color: C_BodyTextColor,
);

const C_TitleTextStyle = TextStyle(
  fontSize: 20,
  color: C_TextColor,
  fontWeight: FontWeight.bold,
);

const C_SubtitleTextStyle = TextStyle(
  fontSize: 18,
  color: C_TextColor,
  // fontWeight: FontWeight.bold,
);
