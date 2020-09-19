# PF Mobile Application

# Compile-Time configuration
## Compile-time variables using Flutter Tools --dart-define
flutter run --dart-define=KEY_1=VAR_1 --dart-define=KEY_2=VAR_2 ...

## Add new Compile-time variables
Add key and default values to dart, android and ios systems following existing style:
- environment_config.dart
- android/app/build.gradle dartEnvironmentVariables list
- ios/Flutter Definearg-defaults.xcconfig
