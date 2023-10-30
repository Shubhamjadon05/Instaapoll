import { Component,OnInit,OnChanges, SimpleChanges } from '@angular/core';
import { MemberServiceService } from 'src/app/services/member-service.service';
import { ParticipantserviceService } from 'src/app/serivces/participantservice.service';
import { PartytopicInserviceService } from 'src/app/serivces/partytopic-inservice.service';
import { HomeNavDataservicesService } from 'src/app/new/home-nav-dataservices.service';
import { ParticipantDeleteServicService } from 'src/app/new/participant-delete-servic.service';
import { ValidLinkServiceService } from 'src/app/new/valid-link-service.service';
import { QuestionServiceService } from 'src/app/new/question-service.service';
import { environment } from 'src/environments/environment';

import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
declare var webkitSpeechRecognition: any;

@Component({
  selector: 'app-addmember',
  templateUrl: './addmember.component.html',
  styleUrls: ['./addmember.component.css']
})
export class AddmemberComponent implements OnInit {
  // for recving Id of event
  baseURL: string=environment.sideUrl
  users: any
  people: any
  data: any;
  Boolean:boolean=false;
  

  // to get login-form data
  formData = {
    Event:localStorage.getItem('Id'),
    // Question:"",
    Name: "",
  }
  
  

  selectedOption: any;
  recognition: any;
  activeField: any
  questionValue: any;
  NameValue: any
  constructor(
    private route: Router,
    private http: HttpClient,
    private memberservice: MemberServiceService,
    private participantservice: ParticipantserviceService,
    private partytopicservice: PartytopicInserviceService,
    private homeNavDataServices:HomeNavDataservicesService,
    private ParticipantDeleteService:ParticipantDeleteServicService,
    private ValidateLinkService:ValidLinkServiceService,
    // private questionservice:QuestionServiceService
  ) {

     
    this.recognition = new webkitSpeechRecognition();
    
    this.recognition.onresult = (event: any) => {
      const spokenText = event.results[0][0].transcript;
      if (this.activeField === 'Name') {
        this.NameValue = spokenText;
        this.formData.Name = this.NameValue;
      }
      
      
     
    }
  }

  startListening(field: string) {
    this.activeField = field;
    this.recognition.start();
  }


  OnSubmit() {
    this.formData.Name=this.formData.Name.charAt(0).toUpperCase() + this.formData.Name.slice(1).toLowerCase();
    console.log(this.formData.Name,"this cpati")
    this.formData.Name=this.formData.Name.trim()
    const payload = this.formData
    console.log(payload)
    if(this.formData.Name!=''){
    
    this.memberservice.postData(payload).subscribe((response) => {
      this.load_data()
      this.formData.Name='';
      
    });}
else{
  this.Boolean=true
  this.formData.Name='';
}
   
  }


  title:any
  ngOnInit(): void {
    // console.log('subject emit')
      this.homeNavDataServices.AddDashboard.next(true);
      this.homeNavDataServices.AddNav.next(false);
       this.title =localStorage.getItem('ParticipantName')
       this.load_data()
      //  this.getQuestion();
      
  }

  load_data(){
    this.participantservice.postData(this.formData).subscribe((response:any)=>{
      // console.log(response,"this is response from participant table")
      this.people= response
      // let data=this.formData.Event
      // localStorage.setItem("Id", data)
      // console.log(this.people)
      })
    // this.http.get('http://localhost:500/participant').subscribe((data: any) => {
    //     console.log(data, "this is data of participant"); // handle the response data here
    //     this.people = data
    //     console.log(this.people)
    //     this.route.navigate(['/Add_Participant'])
    //   });
  }

  delete(Id:any){
// console.log(Id)
this.ParticipantDeleteService.delete({participantId:Id}).subscribe((response:any)=>{
  // console.log(response)
  this.load_data();
})
  }

  // for show the link
  displayStyle = "none";
  link: string = ''
  linkExpiryMessage:string=""
  LinkBoolean:boolean=false
  CreatLink(){
this.displayStyle="block";
let Id = localStorage.getItem("Id")
// this.link = this.baseURL+'eventrating/' + Id
this.ValidateLink(Id);
  }
 
  closePopup() {
    this.displayStyle = "none";
  }
  ValidateLink(Id:any){
    this.ValidateLinkService.validate({event_id:Id}).subscribe((response:any)=>{
      // console.log()
if(response.Boolean==1){
  this.link = this.baseURL+'eventrating/' + Id
  this.LinkBoolean=true
}
else {
  this.linkExpiryMessage="Link is expired"
}
    })
   
  }
  AddQuestion(){
    this.route.navigate(['/question-template']);
  }
}
