// GENERATED CODE - DO NOT MODIFY BY HAND

part of 'pf_connect.dart';

// **************************************************************************
// JsonSerializableGenerator
// **************************************************************************

ConnectStatus _$ConnectStatusFromJson(Map<String, dynamic> json) {
  return ConnectStatus(
    json['connectionCode'] as int,
    json['versionNumber'] as int,
    json['date'] == null ? null : DateTime.parse(json['date'] as String),
  );
}

Map<String, dynamic> _$ConnectStatusToJson(ConnectStatus instance) =>
    <String, dynamic>{
      'connectionCode': instance.connectionCode,
      'versionNumber': instance.versionNumber,
      'date': instance.date?.toIso8601String(),
    };
