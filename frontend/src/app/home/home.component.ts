
import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LoginServiceService } from '../services/login-service.service';
import { SessionStorageService } from '../services/session-storage.service';
import { HomeNavDataservicesService } from '../new/home-nav-dataservices.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import alanBtn from '@alan-ai/alan-sdk-web';
import { CommunicationService } from '../communication.service';
declare var webkitSpeechRecognition: any;
import { Directive, HostListener } from '@angular/core';





@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']


})
export class HomeComponent implements OnInit{
  
  

  isLoading: boolean = false;
  data: any
  spokenWord: any
  sharedDataService: any
  communicationService: any
  receivedData: any
  alanBtnInstance: any
  emailValue: any
  passwordValue: any


  


  // to get login-form datas
  formData = {
    email: "",
    password: "",
  }
  // displayheading=false
  displayheading: boolean = false;
  displayStyle = "none";
  recognition: any;
  activeField: any
  myForm: any;

  constructor(private http: HttpClient,
    private loginService: LoginServiceService,
    private router: Router,
    private sessionservice: SessionStorageService,
    private homeNavDataService: HomeNavDataservicesService,

    formBuilder: FormBuilder,
    communicationService: CommunicationService,
    private elementRef: ElementRef,
    
  ) {
    // hare i am doing some experment for switch from full fill input to next input field 
    // start Here 


    this.myForm = formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });



    // End Here 


      this.recognition = new webkitSpeechRecognition();
      this.recognition.addEventListener('end', () => {
      
        if (this.activeField === 'email') {
          this.startListening('password');
        } 
         
         else {
          this.recognition.stop();
        }
      });
      this.recognition.onresult = (event: any) => {

      const spokenText = event.results[0][0].transcript;

      if (this.activeField === 'email') {
        this.emailValue = spokenText;
        this.formData.email = this.emailValue;

      } else if (this.activeField === 'password') {
        this.passwordValue = spokenText;
        this.formData.password = this.passwordValue;

      }

    }
  }
 
 
  isListening: boolean = false;

  // Helper method to simulate a click on a button
 


   startListening = async (field: string)  =>{
    this.activeField = field;
    this.isListening = true; // Set the listening flag to true
    // const startTime = Date.now();
    await this.recognition.start();

   
  }



  onSubmit() {
    this.isLoading = true;
    this.displayStyle = "block";

    const payload = this.formData;
    // localStorage.setItem('check', this.data.Boolean);
    this.loginService.postData(payload).subscribe((response: any) => {
      this.data = response
      this.sessionservice.postData(response.user.Id)


      setTimeout(() => {
        if (response.Boolean == 1) {
          this.isLoading = false
          this.displayStyle = "none";
          localStorage.setItem("Name", response.user.Name)
          localStorage.setItem("Email", this.formData.email)
          this.dashboard();
        }
        else {
          localStorage.removeItem('check');
          this.displayheading = true
          this.isLoading = false
          this.displayStyle = "none";
          // console.log(this.displayheading)
        }
      }, 1000);


    });
  }

  dashboard() {
    // console.log("dashboard")
    this.router.navigate(['/dashboard']);
  }

  ngOnInit(): void {

    this.homeNavDataService.AddNav.next(true);
    this.homeNavDataService.AddDashboard.next(false);


  }
}

