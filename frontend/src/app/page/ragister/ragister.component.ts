import { Component, OnInit, ElementRef , ViewChild} from '@angular/core';
import { Router } from '@angular/router';
import { RagisterserviceService } from 'src/app/new/ragisterservice.service';

import { HomeNavDataservicesService } from 'src/app/new/home-nav-dataservices.service';
// import { Component} from '@angular/core';
import AlanButton from '@alan-ai/alan-sdk-web';
import { CommunicationService } from 'src/app/communication.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
declare var webkitSpeechRecognition: any;





declare var window: any; // Declare 'window' to access browser APIs


const voiceCommand = "Submit";
const form = document.getElementById('yourFormId');
const submit = document.getElementById('submit');
if (submit) {
  submit.click();
}

@Component({
  selector: 'app-ragister',
  templateUrl: './ragister.component.html',
  styleUrls: ['./ragister.component.css']
})
export class RagisterComponent implements OnInit {
  @ViewChild('myform') myform: ElementRef | any;
  submitForm() {
    // this.myform.nativeElement.submit();
    if (this.myform)
     {
      this.myform.onSubmit(null);
      
     
    }
    
  }
  
 

  
  data: any
  
  alanBtnInstance: any
  emailValue: any
  passwordValue: any
  nameValue:any
  conformPasswordValue:any
  submitValue:any
  
  recognition: any;
  activeField: any
  submit:any
  voiceInput:any;
  

  // to get login-form data
  formData = {
    name: "",
    email: "",
    password: "",
    conformPassword: ""
    
  }

  // displayheading=false
  Errorheading: boolean = false;

  ngOnInit(): void {
    console.log('subject emit')
    this.homeNavDataService.AddNav.next(true);
    this.homeNavDataService.AddDashboard.next(false);

    //  Here is for Alan ai works code for voive speech convert in to text in single feild Start Hare


    this.homeNavDataService.AddNav.next(true);
    this.homeNavDataService.AddDashboard.next(false);



  }
  


  constructor(private route: Router, private ragisterservice: RagisterserviceService, private homeNavDataService: HomeNavDataservicesService,

    formBuilder: FormBuilder,
    private communicationService: CommunicationService,
    private elementRef: ElementRef,
   
  ) { 
    this.recognition = new webkitSpeechRecognition();
    
    
    this.recognition.onresult = (event: any) => {
      const spokenText = event.results[0][0].transcript;
      if (this.activeField === 'name') {
        this.nameValue = spokenText;
        this.formData.name = this.nameValue;
      }
      
      
      else if (this.activeField === 'email') {
        this.emailValue = spokenText;
        this.formData.email = this.emailValue;
      }

      else if (this.activeField === 'password') {
        this.passwordValue = spokenText;
        this.formData.password = this.passwordValue;
      }
      else if (this.activeField === 'confirmpassword') {
        this.conformPasswordValue = spokenText;
        this.formData.conformPassword = this.conformPasswordValue;
      }
      else if (spokenText === voiceCommand.toLowerCase()) {
        this.submitForm();
      }
      else if (this.voiceInput.toLowerCase() === 'navigate to about') {
        this.navigateToPage('/events');
      }

      
    }
    }
  navigateToPage(arg0: string) {
    throw new Error('Method not implemented.');
  }
  

  startListening(field: string) {
    this.activeField = field;
    this.recognition.start();
  }
  


  

  // submitFunction(data: any) {
  //   this.submitForm()
  //   console.log("Form is being submitted")
  // }

  onSubmit() {
    // console.log(this.formData)
    const payload = this.formData;
    if (this.formData.conformPassword != this.formData.password) {
      this.Errorheading = true;
    }
    else {
      this.ragisterservice.postData(payload).subscribe((response: any) => {
        let boolean = response.Boolean
        //  console.log(boolean)
        if (boolean == 1) {
          this.route.navigate(['/login']);
        }
        else {
          this.Errorheading = true;
        }
      });
    }
    
  }

  

}
function recognizeVoiceCommand(voiceInput: any, string: any) {
  throw new Error('Function not implemented.');
}

