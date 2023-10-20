import { Component,OnInit } from '@angular/core';
import { QuestionServiceService } from 'src/app/new/question-service.service';
import { HomeNavDataservicesService } from 'src/app/new/home-nav-dataservices.service';


@Component({
  selector: 'app-show-question',
  templateUrl: './show-question.component.html',
  styleUrls: ['./show-question.component.css']
})
export class ShowQuestionComponent implements OnInit {
  constructor(private homeNavDataServices: HomeNavDataservicesService,
    private questionService: QuestionServiceService) { }
  ngOnInit(): void {
    this.homeNavDataServices.AddDashboard.next(true);
    this.homeNavDataServices.AddNav.next(false);
    this.title = localStorage.getItem('ParticipantName')
    this.load_data()
  }
  title: any
  question: any
   // for loading a question form database to frontpage
   load_data() {
    // console.log(this.formData.event_id)
    this.questionService.getquestion({ event_id: 0 }).subscribe((response: any) => { 
      this.question=response
    })

    console.log(this.question,"these is question from database")
  }

  AddQuestion(){
    
  }

}
