import 'dart:ui';

import 'package:intl/intl.dart';

class RusbookChapter {
  final String chapterName;
  final String image;

  RusbookChapter(this.chapterName, this.image);
}

List<RusbookChapter> rChapters = chapterData
    .map((item) => RusbookChapter(item['chapterName'], item['image']))
    .toList();

List<RusbookChapter> rusbookChapters(String locale) {
  if (locale == 'en') {
    return chapterData
        .map((item) => RusbookChapter(item['chapterName'], item['image']))
        .toList();
  } else if (locale == 'dk') {
    return chapterData_dk
        .map((item) => RusbookChapter(item['chapterName'], item['image']))
        .toList();
  } else {
    return null;
  }
}

var chapterData = [
  {"chapterName": "Welcome", 'image': "assets/images/welcomeArtboard 1.png"},
  {"chapterName": "PF", 'image': "assets/images/pfArtboard 1.png"},
  {
    "chapterName": "Education",
    'image': "assets/images/educationArtboard 1.png"
  },
  {
    "chapterName": "Student Life",
    'image': "assets/images/student_lifeArtboard 1.png"
  },
  {"chapterName": "DTU", 'image': "assets/images/dtuArtboard 1.png"},
  {"chapterName": "Dorms", 'image': "assets/images/dormsArtboard 1.png"},
  {"chapterName": "Links", 'image': "assets/images/linksArtboard 1.png"}
];

var chapterData_dk = [
  {"chapterName": "Velkommen", 'image': "assets/images/welcomeArtboard 1.png"},
  {"chapterName": "PF", 'image': "assets/images/pfArtboard 1.png"},
  {
    "chapterName": "Uddannelse",
    'image': "assets/images/educationArtboard 1.png"
  },
  {
    "chapterName": "Studieliv",
    'image': "assets/images/student_lifeArtboard 1.png"
  },
  {"chapterName": "DTU", 'image': "assets/images/dtuArtboard 1.png"},
  {"chapterName": "Kollegier", 'image': "assets/images/dormsArtboard 1.png"},
  {"chapterName": "Links", 'image': "assets/images/linksArtboard 1.png"}
];
