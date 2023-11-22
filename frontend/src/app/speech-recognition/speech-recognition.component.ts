// import { Component, OnInit } from '@angular/core';
// import * as sdk from 'microsoft-cognitiveservices-speech-sdk';

// @Component({
//   selector: 'app-speech-recognition',
//   templateUrl: './speech-recognition.component.html',
//   styleUrls: ['./speech-recognition.component.css']
// })
// export class SpeechRecognitionComponent implements OnInit {
//   private speechConfig = sdk.SpeechConfig.fromSubscription('YOUR_API_KEY', 'YOUR_SERVICE_REGION');
//   private recognizer: sdk.SpeechRecognizer;

//   constructor() { }

//   ngOnInit() {
//     this.recognizer = new sdk.SpeechRecognizer(this.speechConfig);

//     // Handle recognition events and results
//     this.recognizer.recognized = (s, e) => {
//       if (e.result.reason === sdk.ResultReason.RecognizedSpeech) {
//         const recognizedText = e.result.text;
//         console.log(`Recognized: ${recognizedText}`);
//         // You can do something with the recognized text here
//       }
//     };

//     this.recognizer.startContinuousRecognitionAsync();
//   }

//   ngOnDestroy() {
//     if (this.recognizer) {
//       this.recognizer.stopContinuousRecognitionAsync();
//     }
//   }
// }
