import { Component, OnInit, ElementRef , ViewChild} from '@angular/core';
import { Router } from '@angular/router';
import { RagisterserviceService } from 'src/app/new/ragisterservice.service';

import { HomeNavDataservicesService } from 'src/app/new/home-nav-dataservices.service';
// import { Component} from '@angular/core';
import AlanButton from '@alan-ai/alan-sdk-web';
import { CommunicationService } from 'src/app/communication.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';




declare var window: any; // Declare 'window' to access browser APIs

@Component({
  selector: 'app-ragister',
  templateUrl: './ragister.component.html',
  styleUrls: ['./ragister.component.css']
})
export class RagisterComponent implements OnInit {
  @ViewChild('myform') myform: ElementRef | any;
  submitForm() {
    // this.myform.nativeElement.submit();
    if (this.myform) {
      this.myform.onSubmit(null);
    }
  }
  


  
  data: any
  spokenWord: any
  sharedDataService: any
  
  
  

  receivedData: any
  alanBtnInstance: any
  emailValue: any
  passwordValue: any
  

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
    communicationService.setLoginFunction(this.setValuesForLogin.bind(this));
    communicationService.setSubmitFuntion(this.submitFunction.bind(this));
  }

  // loginFunction(data: any) {
  //   this.setValuesForLogin(data);
    
  // }

  submitFunction(data: any) {
    this.submitForm()
    console.log("Form is being submitted")
  }

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

  
  setValuesForLogin(loginData: any) {
    console.log("loginData", loginData);
    const element = this.elementRef.nativeElement.querySelector("#" + loginData.type);
    if (element) {
      console.log('Element found with ID: ' + loginData.type);
      if (!element.value) {
        element.value = loginData.value;

      }
    } else {
      console.log('Element not found with ID: ' + loginData.type);
      console.log('password  id not found' + loginData.type)


    }
    
  }
}
