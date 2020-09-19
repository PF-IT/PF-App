// GENERATED CODE - DO NOT MODIFY BY HAND
import 'package:flutter/material.dart';
import 'package:intl/intl.dart';
import 'intl/messages_all.dart';

// **************************************************************************
// Generator: Flutter Intl IDE plugin
// Made by Localizely
// **************************************************************************

// ignore_for_file: non_constant_identifier_names, lines_longer_than_80_chars

class S {
  S();

  static S current;

  static const AppLocalizationDelegate delegate = AppLocalizationDelegate();

  static Future<S> load(Locale locale) {
    final name = (locale.countryCode?.isEmpty ?? false)
        ? locale.languageCode
        : locale.toString();
    final localeName = Intl.canonicalizedLocale(name);
    return initializeMessages(localeName).then((_) {
      Intl.defaultLocale = localeName;
      S.current = S();

      return S.current;
    });
  }

  static S of(BuildContext context) {
    return Localizations.of<S>(context, S);
  }

  /// `Polytechnic Association`
  String get pfName_msg {
    return Intl.message(
      'Polytechnic Association',
      name: 'pfName_msg',
      desc: '',
      args: [],
    );
  }

  /// `Welcome`
  String get welcome_msg {
    return Intl.message(
      'Welcome',
      name: 'welcome_msg',
      desc: '',
      args: [],
    );
  }

  /// `Please choose a chapter you would like to read`
  String get selectChapter_msg {
    return Intl.message(
      'Please choose a chapter you would like to read',
      name: 'selectChapter_msg',
      desc: '',
      args: [],
    );
  }

  /// `Chapters`
  String get chapters_msg {
    return Intl.message(
      'Chapters',
      name: 'chapters_msg',
      desc: '',
      args: [],
    );
  }

  /// `english_md_list`
  String get markdownList_opt {
    return Intl.message(
      'english_md_list',
      name: 'markdownList_opt',
      desc: '',
      args: [],
    );
  }

  /// `Error`
  String get error_warn {
    return Intl.message(
      'Error',
      name: 'error_warn',
      desc: '',
      args: [],
    );
  }

  /// `Prepping some content for ya`
  String get prepping_warn {
    return Intl.message(
      'Prepping some content for ya',
      name: 'prepping_warn',
      desc: '',
      args: [],
    );
  }
}

class AppLocalizationDelegate extends LocalizationsDelegate<S> {
  const AppLocalizationDelegate();

  List<Locale> get supportedLocales {
    return const <Locale>[
      Locale.fromSubtags(languageCode: 'en'),
      Locale.fromSubtags(languageCode: 'dk'),
    ];
  }

  @override
  bool isSupported(Locale locale) => _isSupported(locale);
  @override
  Future<S> load(Locale locale) => S.load(locale);
  @override
  bool shouldReload(AppLocalizationDelegate old) => false;

  bool _isSupported(Locale locale) {
    if (locale != null) {
      for (var supportedLocale in supportedLocales) {
        if (supportedLocale.languageCode == locale.languageCode) {
          return true;
        }
      }
    }
    return false;
  }
}
