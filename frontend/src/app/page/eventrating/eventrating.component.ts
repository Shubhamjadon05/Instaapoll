import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EventratingserviceService } from 'src/app/new/eventratingservice.service';
import { PartyRatingInService } from 'src/app/services/party-rating-in.service';
import { QuestionServiceService } from 'src/app/new/question-service.service';
import { ValidLinkServiceService } from 'src/app/new/valid-link-service.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { startWith, map } from 'rxjs/operators';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-eventrating',
  templateUrl: './eventrating.component.html',
  styleUrls: ['./eventrating.component.css']
})
export class EventratingComponent implements OnInit {

  // field1: string = '1';
  field1 = new FormControl();
  field2: string = '2';
  field3: string = '3';

  field1Suggestions!: Observable<string[]>;
  autocompleteForm: any;

  constructor(private route: ActivatedRoute,
    private router: Router,
    private eventratingservice: EventratingserviceService,
    private eventRatingInputService: PartyRatingInService,
    private questionService: QuestionServiceService,
    private validateLinkService: ValidLinkServiceService) {
  }
    // For show a link expary or not
    ExparyMessage:Boolean=true
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

    // for getting qestion data
    question: any
    event: any
    participants: any

  // this is for get id from url
      extractedId: any
      ngOnInit(): void {
        this.extractedId = this.route.snapshot.paramMap.get('eventId');
        // this.extractedId ="1";
        // console.log(this.extractedId, "this is from route");
        this.validateLink(this.extractedId)
        // this.questiondata();

        this.field1Suggestions = this.field1.valueChanges.pipe(
          startWith(''),
          map(value => this.filterSuggestions(value))
        );

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


        //function for filter suggestions
        filterSuggestions(value: string): string[] {
          // Implement logic to filter suggestions based on the entered value
          // For example, filter a predefined list of suggestions
          const suggestions: string[] = ['alphabeton1', 'Option2', 'reaction'];
          return suggestions.filter(option => option.toLowerCase().includes(value.toLowerCase()));
        }

}
