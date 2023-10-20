import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EventratingserviceService } from 'src/app/new/eventratingservice.service';
import { PartyRatingInService } from 'src/app/services/party-rating-in.service';
import { QuestionServiceService } from 'src/app/new/question-service.service';
import { ValidLinkServiceService } from 'src/app/new/valid-link-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-eventrating',
  templateUrl: './eventrating.component.html',
  styleUrls: ['./eventrating.component.css']
})
export class EventratingComponent implements OnInit {
  constructor(private route: ActivatedRoute,
    private router: Router,
    private eventratingservice: EventratingserviceService,
    private eventRatingInputService: PartyRatingInService,
    private questionService: QuestionServiceService,
    private validateLinkService: ValidLinkServiceService) {
  }
// For show a link expary or not
ExparyMessage:Boolean=true

  // this is for get id from url
  extractedId: any
  ngOnInit(): void {
    this.extractedId = this.route.snapshot.paramMap.get('eventId');
    // this.extractedId ="1";
    // console.log(this.extractedId, "this is from route");
    this.validateLink(this.extractedId)
    // this.questiondata();
  }

// for set the time for rating
validateLink(Id:any){
  this.validateLinkService.validate({event_id:Id}).subscribe((response:any)=>{
    console.log(response.Boolean)
    if(response.Boolean==1){
     this.displayContainer = "block"
     this.ExparyMessage=false
      this.participantData();
    }
    else{
      this.displayContainer = "none"
    }
  })
  
}

  // for getting qestion data
  question: any
  // questiondata() {
  //   this.questionService.getquestion({ event_id: '0' }).subscribe((Response: any) => {
  //     // console.log(Response)
  //     this.question = Response.map((val: any, i: number) => { return { que_id: val.Id, question: val.Question, participants: [...this.participants] } })
  //     // console.log(this.question ,"this is question for print")
  //     this.displayLoading="none"
  //     this.isLoading=false
  //   })
  // }
  // for geting Event detail by id
  
  event: any
  participants: any
  // template:any
  participantData() {
    let val = this.extractedId;
    console.log(val, "this is value in ts component");
    this.isLoading= true;
    this.displayLoading="block"
    this.eventratingservice.participantName({ event_id: val }).subscribe((response: any) => {
      this.event = response.eventDetail
      this.participants = response.participantsDetail.map((val: any) => { return { ...val, rating: [] } })
      this.question = response.questions.map((val: any, i: number) => { return { que_id: val.Id, question: val.Question, participants: [...this.participants] } })
      
      this.isLoading=false
      this.displayLoading="none"
// this.template=response.eventDetail.template
    })
  }
  displayStyle = "none";
  displayContainer = "none"
  displayError = false
  displayLoading="none"
 
  isLoading=false



  //for display and submit rating 
  person: any
  ratingData: any = {
    value: []
  }

  // For submit of rating
  Rating: { question: number, participant: number, rating: number }[] = []
  Onsubmit() {
    for (let i = 0; i < this.question.length; i++) {
      for (let j = 0; j < this.participants.length; j++) {
        let newArray: any = {
          question: this.question[i].que_id,
          participant: this.participants[j].Id,
          rating: this.participants[j].rating[i]
        }
        this.Rating.push(newArray)
      }
    }

    this.eventRatingInputService.eventRating(this.Rating).subscribe((response: any) => {
      // console.log(response, "this is response form nodejs")
      if(response.Boolean==1){
        this.displayStyle = "block";
        this.displayContainer = "none"
      }
      else{
        this.displayError=true;
      }
    })
  }
}
