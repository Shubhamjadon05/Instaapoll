import { Component,OnInit} from '@angular/core';
import { RatingserviceService } from 'src/app/services/ratingservice.service';
import { HomeNavDataservicesService } from 'src/app/new/home-nav-dataservices.service';
import { ParticipantserviceService } from 'src/app/serivces/participantservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ratingpage',
  templateUrl: './ratingpage.component.html',
  styleUrls: ['./ratingpage.component.css']
})

export class RatingpageComponent implements OnInit{
  users:any
  rating:any
  formData = {
    Event:localStorage.getItem('Id')
  }
  constructor(private ratingservice:RatingserviceService,
     private route:Router, 
     private homeNavDataServices:HomeNavDataservicesService,
    private participantservice: ParticipantserviceService,){
  }

  // this is the title for rating page
  data:any
  title:any
  people: any
  RaterCount:any
  ngOnInit(): void {
    this.homeNavDataServices.AddDashboard.next(true);
    this.homeNavDataServices.AddNav.next(false);
    this.title =localStorage.getItem('ParticipantName')
    // this.Participant_data();
    this.Rating_data();
    this.rater_count();
  }

  rater_count(){
    this.ratingservice.raterCount({event_id:this.formData.Event}).subscribe((response:any)=>{
this.RaterCount=response.count
    })
  }

  Rating_data(){
    console.log(this.formData,"this is formdata in rating page component")
    this.ratingservice.users({event_id:this.formData.Event}).subscribe((data: any)=>{
      this.users= data
      console.log(this.users,"this is participant data send to api for rating")
    })
  }

  // getParticipantName(participantId: string): string {
  //   const record = this.people.find((record: any) => record.Id === +participantId);
  //   return record ? record.Name : '';
  // }
}