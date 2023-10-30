import { Component, OnInit } from '@angular/core';
import AlanButton from '@alan-ai/alan-sdk-web';

@Component({
  selector: 'app-speech-display',
  templateUrl: './speech-display.component.html',
  styleUrls: ['./speech-display.component.css']
})
export class SpeechDisplayComponent implements OnInit {
  spokenText: string = '';

  ngOnInit(): void {
    // const alanKey = '97c1597b76913fc5d3d1ea5d5e5403772e956eca572e1d8b807a3e2338fdd0dc/stage';

    // AlanButton({
    //   key: alanKey,
    //   onCommand: (commandData: any) => {
    //     // Handle Alan's commands here
    //     console.log(commandData,"speech");

    //     // Check if Alan sends auto-typed speech
    //     if (commandData.command === 'autoTypedSpeech') {
    //       this.spokenText = commandData.text; // Update the spokenText property
    //     }
    //   },
    // });
  }
}
