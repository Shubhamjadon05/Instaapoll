import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { PartyServiceService } from 'src/app/services/party-service.service';
import { HomeNavDataservicesService } from 'src/app/new/home-nav-dataservices.service';
import { EventlinkserviceService } from 'src/app/new/eventlinkservice.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { CommunicationService } from 'src/app/communication.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

declare var webkitSpeechRecognition: any;
const voiceCommand = "Submit";



@Component({
  selector: 'app-partyform',
  templateUrl: './partyform.component.html',
  styleUrls: ['./partyform.component.css']
})
export class PartyformComponent implements OnInit {

  @ViewChild('myform') myform: ElementRef | any;
  submitForm() {
    // this.myform.nativeElement.submit();
    if (this.myform) {
      const microphoneIcon = document.getElementById('submit');
      if (microphoneIcon) {
        microphoneIcon.style.display = 'inline'; // Show the microphone icon
      }
      this.myform.onSubmit(null);
    }
  }

  sharedDataService: any
  communicationService: any
  receivedData: any
  alanBtnInstance: any
  spokenWord: any
  recognition: any;
  activeField: any
  NameValue:any
  PlaceValue:any
  DateValue:any
  TimeValue:any
  DescriptionValue:any
  HourValue:any
  

  data1: any;
  // to get login-form data
  data = localStorage.getItem('check');
  formData = {
    User: this.data,
    Template: 0,
    Name: "",
    Place: "",
    Date: "",
    Time: "",
    Description: "",
    Hour: ""
  }

  constructor(private route: Router,
    private http: HttpClient,
    private partyservice: PartyServiceService,
    private homeNavDataServices: HomeNavDataservicesService,
    private eventlinkservive: EventlinkserviceService,
    formBuilder: FormBuilder,
    communicationService: CommunicationService,
    private elementRef: ElementRef,
    private homeNavDataService: HomeNavDataservicesService,

  ) {
    this.recognition = new webkitSpeechRecognition();
    this.recognition.addEventListener('end', () => {
      // Code to run when recognition stops on its own
      if (this.activeField === 'name') {
        this.startListening('place');
      } else if (this.activeField === 'place') {
        this.startListening('date');
      } else if (this.activeField==='date') {
        this.startListening('time')
      }
      else if (this.activeField==='time') {
        this.startListening('hour')
        
        
      }
      else if (this.activeField==='hour') {
        this.startListening('Description')
        this.recognition.stop();
        
      }
      else{
        this.recognition.stop();

        // this.startListening('name')
      }

  
    });
    
    this.recognition.onresult = (event: any) => {
      const spokenText = event.results[0][0].transcript;
      if (this.activeField === 'name') {
        this.NameValue = spokenText;
        this.formData.Name = this.NameValue;
      }
      
      
      else if (this.activeField === 'place') {
        this.PlaceValue = spokenText;
        this.formData.Place = this.PlaceValue;
      }

      else if (this.activeField === 'date') {
        this.DateValue = spokenText;
        this.formData.Date = this.DateValue;
      }
      else if (this.activeField === 'time') {
        this.TimeValue = spokenText;
        this.formData.Time = this.TimeValue;
      }
      else if (this.activeField === 'hour') {
        this.HourValue = spokenText;
        this.formData.Hour = this.HourValue;
      }
      else if (this.activeField === 'Description') {
        this.DescriptionValue = spokenText;
        this.formData.Description = this.DescriptionValue;
      } 
    }
    console.log(this.activeField,"fields")
   
  }
  isListening: boolean = false;
  
  startListening = async (field: string)  =>{
    this.activeField = field;
    this.isListening = true; // Set the listening flag to true
    // const startTime = Date.now();
    await this.recognition.start();

   
  }
  
  

  submitFunction(data: any) {
    this.submitForm()
    console.log("Form is being submitted")
  }


  displayheading: boolean = false
  baseURL: string = environment.sideUrl;


  OnSubmit() {
    
    this.partyservice.postData(this.formData).subscribe((response: any) => {
     
      if (response.Boolean == 1) {
        this.displayheading = false
        this.homeNavDataServices.SubmitLink.next(true)
        this.GoToAddParticipant(response.Id)
        this.CreatLink(response.Id)

      }
      if (response.Boolean == 0) {
        this.displayheading = true
      }

    })
  }
  GoToAddParticipant(data: any) {
    // this.route.navigate(['/add-participant'])
    this.route.navigate(['/choice'])
    localStorage.setItem("Id", data)
    localStorage.setItem("ParticipantName", this.formData.Name)
  }
  CreatLink(Id: any) {
    let link = this.baseURL + 'eventrating/' + Id
    this.SubmitLink(link, Id)
  }
  SubmitLink(link: any, Id: any) {
    this.eventlinkservive.eventlink({ hour: this.formData.Hour, link: link, event_id: Id }).subscribe((data: any) => {
     
    })
  }

  back() {
    this.route.navigate(['/events']);
  }

  ngOnInit(): void {
    // console.log('subject emit')
    this.homeNavDataServices.AddDashboard.next(true);
    this.homeNavDataService.AddNav.next(true);
    this.homeNavDataService.AddDashboard.next(false);
 }

  setValuesForLogin(loginData: any) {
    console.log("loginData", loginData);
    const element = this.elementRef.nativeElement.querySelector("#" + loginData.type);
    if (element) {
      console.log('Element found with ID: ' + loginData.type );
      element.value = element.value +loginData.value;
      // if (!element.value) {
        
      
      // }
    } else {
      console.log('Element not found with ID: ' + loginData.type);
      console.log('password  id not found' + loginData.type)

    }
    
  }
}
function parseDate(dateText: string): Date | null {
  // Your date parsing logic here
  const parsedDate = new Date(dateText);
  if (isNaN(parsedDate.getTime())) {
    // Handle parsing failure
    return null; // Return null or another appropriate value
  }
  return parsedDate;
}

