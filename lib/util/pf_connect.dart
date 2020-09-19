import 'dart:ffi';

import 'package:http/http.dart' as http;
import 'dart:convert';
import 'dart:async';
import 'package:json_annotation/json_annotation.dart';
import 'package:pf_mobile_application/environment_config.dart';
import 'package:pf_mobile_application/model/rusbookStorage.dart';
import 'package:shared_preferences/shared_preferences.dart';
import 'package:connectivity/connectivity.dart';

part 'pf_connect.g.dart';

// Backend communication
// https://github.com/flutterchina/dio/ <- future implementation for more robust solution
class PFConnect {
  // Sync with PF Backend Server
  static void sync() async {
    var cr = await (Connectivity().checkConnectivity());
    if (cr == ConnectivityResult.mobile || cr == ConnectivityResult.wifi) {
      ConnectStatus status = await getConnectStatus();
      final prefs = await SharedPreferences.getInstance();
      int rb_VersionNumber = prefs.get('versionNumber'); // rb: RusBook
      if (rb_VersionNumber != status.versionNumber) {
        print("Different versionNumber -> Syncing!");
        print(status);
        _rusbookMarkDownFilesForce;
        //_rusbookMediaFilesForce;
        _clean;
        prefs.setInt('versionNumber', rb_VersionNumber);
      }
    }
  }

  static Future<ConnectStatus> getConnectStatus() async {
    http.Response response =
        await http.get('${EnvironmentConfig.APP_OAS_URL}/getStatus');
    print(response.body);
    ConnectStatus connectStatus =
        ConnectStatus.fromJson(jsonDecode(response.body));
    return connectStatus;
  }

  static Future<List<String>> availableRusbookMarkDownFiles(String lang) async {
    try {
      List<String> list;
      if (lang == "dk") {
        var danish_rusbook_files = await http.get(
            '${EnvironmentConfig.APP_OAS_URL}/getDanishRusbook?listFiles');
        Iterable dkMd = jsonDecode(danish_rusbook_files.body);
        list = List<String>.from(dkMd);
        return list;
      } else if (lang == "en") {
        var english_rusbook_files = await http.get(
            '${EnvironmentConfig.APP_OAS_URL}/getEnglishRusbook?listFiles');
        Iterable enMd = jsonDecode(english_rusbook_files.body);
        list = List<String>.from(enMd);
        return list;
      } else {
        throw Exception("Given lang param not valid!");
      }
    } catch (e) {
      return null;
    }
  }

/*  bool get _rusbookStatus async {
    return null;
  }*/

  /*Future<String> get _rusbookMarkDownFiles async {
    var response = await http.get(url);
  }*/

  // Force Download rusbook MarkDown files
  static Future<bool> get _rusbookMarkDownFilesForce async {
    try {
      final prefs = await SharedPreferences.getInstance();
      List<String> dkMdList = await availableRusbookMarkDownFiles("dk");
      prefs.setStringList('danish_md_list', dkMdList);
      List<String> enMdList = await availableRusbookMarkDownFiles("en");
      prefs.setStringList('english_md_list', enMdList);
      for (var i = 0; i < dkMdList.length; i++) {
        var dataResponse = await http.get(
            '${EnvironmentConfig.APP_OAS_URL}/getDanishRusbook?file=${dkMdList[i]}');
        RusbookStorage.writeMarkDown(dkMdList[i], dataResponse.body);
      }
      for (var i = 0; i < enMdList.length; i++) {
        var dataResponse = await http.get(
            '${EnvironmentConfig.APP_OAS_URL}/getEnglishRusbook?file=${enMdList[i]}');
        RusbookStorage.writeMarkDown(enMdList[i], dataResponse.body);
      }
      print("Rusbook files written to system");
      return true;
    } catch (e) {
      print("Failed to force download MarkDown Files!");
      return false;
    }
  }

  /* DO WE REALLY WANT TO DOWNLOAD LARGE MEDIA FILES LOCALLY?
  I THINK WE SHOULD JUST STREAM THEM WHEN IN THE RUSBOOK CHAPTER WIDGET */
  /*static Future<bool> get _rusbookMediaFilesForce async {
    try {
      // Retrieve information
      var response = await http.get('${EnvironmentConfig.app_server_url}/getRusbookMedia?listFiles');
      Iterable iter = jsonDecode(response.body);
      List<String> mediaNameList = iter.toList();

      // Downloading
      mediaNameList.forEach((fileName) async {
        var dataResponse = await http.get('${EnvironmentConfig.app_server_url}/getRusbookMedia?file=$fileName');

      });
      // Writing
    } catch (e) {
      print(e);
      return false;
    }

  }*/

  // Match system state with backend and clean system if necessary
  static Future<bool> get _clean async {
    return null;
  }

/*  void get _rusbookMediaFiles async {

  }*/

}

// https://flutter.dev/docs/development/data-and-backend/json
@JsonSerializable(explicitToJson: true)
class ConnectStatus {
  ConnectStatus(this.connectionCode, this.versionNumber, this.date);
  int connectionCode;
  int versionNumber;
  DateTime date;

  factory ConnectStatus.fromJson(Map<String, dynamic> json) =>
      _$ConnectStatusFromJson(json);
  Map<String, dynamic> toJson() => _$ConnectStatusToJson(this);
}
