// Class for dealing with MarkDown Files stored on device
import 'dart:io';

import 'package:path_provider/path_provider.dart';

class RusbookStorage {
  static Future<String> get _localPath async {
    final directory = await getApplicationDocumentsDirectory();
    return directory.path;
  }

  // Retrieve stream of available MarkDown files currently stored on device
  static Future<Stream<FileSystemEntity>> get _LocalFileStream async {
    final directory = await getApplicationDocumentsDirectory();
    return directory.list();
  }

  static Future<File> localFile(String fileName) async {
    try {
      final path = await _localPath;
      return File('$path/$fileName');
    } catch (e) {
      return null;
    }
  }

  static Future<String> readMarkDown(String fileName) async {
    try {
      final file = await localFile(fileName);

      // Read the file
      String contents = await file.readAsString();

      return contents;
    } catch (e) {
      // If encountering an error, return null
      return null;
    }
  }

  static Future<File> writeMarkDown(String fileName, String data) async {
    final file = await localFile(fileName);

    // Write the file
    return file.writeAsString('$data');
  }
}
