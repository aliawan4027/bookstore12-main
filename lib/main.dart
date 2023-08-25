// ignore: avoid_web_libraries_in_flutter
import 'dart:html' as html;
import 'package:flutter/material.dart';

void main() {
  runApp(const MyApp());
}

class MyApp extends StatelessWidget {
  const MyApp({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Choosing From Gallery',
      home: Scaffold(
        backgroundColor: Colors.amber,
        appBar: AppBar(title: const Text('Collection Of Images')),
        body: const Center(
          child: ImageUploadWidget(),
        ),
      ),
    );
  }
}

class ImageUploadWidget extends StatelessWidget {
  const ImageUploadWidget({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Center(
      child: ElevatedButton(
        onPressed: () {
          final html.FileUploadInputElement input =
              html.FileUploadInputElement();
          input.accept = 'image/*';
          input.click();

          input.onChange.listen((event) {
            final files = input.files;
            if (files!.isNotEmpty) {
              final file = files[0];
              // Handle the selected file
              // ignore: avoid_print
              print('Select a Image: ${file.name}');
            }
          });
        },
        style: ElevatedButton.styleFrom(
          shape: RoundedRectangleBorder(
            borderRadius: BorderRadius.circular(69),
          ),
        ),
        child: const Text('Select a Image'),
      ),
    );
  }
}
