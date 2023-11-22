
// this is demo 
import { Component, OnInit, ElementRef,ViewChild } from '@angular/core';
import alanBtn from '@alan-ai/alan-sdk-web';
import { Router } from '@angular/router';
// import { SharedDataService } from './shared-data.service';
import { CommunicationService } from './communication.service';
import { Model, SurveyModel } from "survey-core";










declare var webkitSpeechRecognition: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'My First Survey';
  surveyModel: Model = new SurveyModel;

  
  
   

  // spokenTextInput: any;
  spokenWord :any
  inputData: string = 'Data from App Component';
  loginData : any;
  recognition: any;
  userSpeech: string = '';
  

  
  

  constructor(private el: ElementRef, private router: Router,private communicationService: CommunicationService) {

    this.recognition = new webkitSpeechRecognition();
    this.recognition.onresult = (event: any) => {
      this.userSpeech = event.results[0][0].transcript;
    };
    // this.loginData = { type: '', value: '' };
  }
  startListening() {
    this.recognition.start();
  }
  

  setDataForLoginComponent(speach:any) {
    console.log(speach,"speach in panel")
    // console.log(this.spokenTextInput,"is this spoken text in panel")
   

    this.communicationService.callLoginFunction(speach);
    
  }
  


  ngOnInit() {
    






    const alanKey = '97c1597b76913fc5d3d1ea5d5e5403772e956eca572e1d8b807a3e2338fdd0dc/stage';
    
// let spokenTextInput:string = ''
let alanBtnElement = ''
let spokenWord =''



// Define Alan AI options
    const alanOptions = {
      key: alanKey,
      onCommand: (commandData: any) => {
       
        console.log(commandData,"command data from app in penel")
        if (commandData.command === 'submit') {
        
          // this.communicationService.submitForm();
           this.communicationService.callSubmitFuntion("default");

        }

        if(commandData.command === 'email'){
          // console.log("email command running....")
          this.loginData = {type:"email", value:null};
        }

        if(commandData.command === 'password'){
          this.loginData = {type:"password", value:null};
        }

        if(commandData.command === 'conformPassword'){
          this.loginData = {type:"conformPassword", value:null};
        }

        if (commandData.command==='name'){
          this.loginData={type:"name",value:null};
        }



        // this Create Post Commants 
        if (commandData.command==='tittle'){
          this.loginData={type:"tittle",value:null};
        }

        if (commandData.command==='place'){
          this.loginData={type:"place",value:null};
        }

        if (commandData.command==='date'){
          this.loginData={type:"date",value:null};
        }

        if (commandData.command==='time'){
          this.loginData={type:"time",value:null};
        }
        if (commandData.command==='hour'){
          this.loginData={type:"hour",value:null};
        }

        if (commandData.command==='description'){
          this.loginData={type:"description",value:null};
        }


        // this this route page from voice commands 
        if (commandData.command === 'login ') {
                    this.router.navigate(['/**']);
                  } else if (commandData.command === 'register') {
                    this.router.navigate(['/register']);
                  } else if (commandData.command === 'view-rating') {
                    this.router.navigate(['/view-rating']);
                  } else if (commandData.command === 'events') {
                    this.router.navigate(['/events']);
                  } else if (commandData.command === 'dashboard') {
                    this.router.navigate(['/dashboard']);
                  } else if (commandData.command === 'profile') {
                    this.router.navigate(['/profile']);
                  } else if (commandData.command === 'createpost') {
                    this.router.navigate(['/add-event']);
          
                  } else if (commandData.command === 'enter name') {
                    this.router.navigate(['/add-event']);
                   }
                  else if (commandData.command==='enter email'){
                    this.router.navigate(['/Enter Email'])
                  }
  },



      
      onEvent:(e:any) => {
       
        // // console.log(e,"an event on ai");
        if(!e.type){

          if(this.loginData && this.loginData.type){
            console.log(this.loginData,"from app login data")

            this.loginData.value = e.text
            this.setDataForLoginComponent(this.loginData);   
          }
    
        }
        }



      // onEvent: (e: any) => {
      //   if (!e.type) {
      //     if (this.loginData&& this.loginData.type) {
      //       if (this.loginData.value) {
      //         this.loginData.value += ' ' + e.text; 
      //       } else {
      //         this.loginData.value = e.text;
      //       }
      //       this.setDataForLoginComponent(this.loginData);
      //     }
      //   }
      // }
      
    

    }
      
  
    alanBtn(alanOptions);
    console.log(alanOptions,"alan option  ffrom app ")

    
    // startListening(); {
    //   this.recognition.start();
    // }

    

    
  }}




function startListening() {
  throw new Error('Function not implemented.');
}

