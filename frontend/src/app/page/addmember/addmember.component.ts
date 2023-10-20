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
  ) {}

// getQuestion(){
//   this.questionservice.getquestion({event_id:0}).subscribe((response:any)=>{
//     console.log(response)
    
//   })
// }
//  to convert the input test into right format
// InputConverter(){
//   const name = this.formData.Name;
//   const words = name.split(' ');
//   console.log(words,"this is word to convert")

//   const capitalizedWords = words.map((word) => {
//     console.log(capitalizedWords,"this is capitalized word")
 
//     const preservedWords = ['Dr.', 'Mr.', 'Ms.'];

//     if (preservedWords.includes(word)) {
//       this.formData.Name=word
//       console.log(this.formData.Name, "this is name in formdata")
//       return this.formData.Name;
//     } else {
//       word=word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
//       console.log(word)
//       this.formData.Name=word
//       return this.formData.Name
//     }
//   });
// }


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
