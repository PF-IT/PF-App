import 'dart:io';

class EnvironmentConfig {
  // APP NAME
  static const APP_NAME =
      String.fromEnvironment('DEFINEARG_APP_NAME', defaultValue: 'PF');

  // APP SUFFIX
  static const APP_SUFFIX = String.fromEnvironment('DEFINEARG_APP_SUFFIX');

  // OAS API
  static const APP_OAS_URL = String.fromEnvironment(
    'DEFINEARG_APP_OAS_URL',
  );

  // ENVIRONMENT
  static const APP_ENVIRONMENT = String.fromEnvironment(
      'DEFINEARG_APP_ENVIRONMENT',
      defaultValue: 'development');
}
