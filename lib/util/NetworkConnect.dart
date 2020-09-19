import 'package:http/http.dart' as http;

class NetworkConnect {
  static Future<http.Response> fetchRusbookMediaFiles() {
    return http.get('https://jsonplaceholder.typicode.com/albums/1');
  }
}
