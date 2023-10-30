import { Component, OnInit } from '@angular/core';
import { HomeNavDataservicesService } from 'src/app/new/home-nav-dataservices.service';
import { QuestionServiceService } from 'src/app/new/question-service.service';
import { Router } from '@angular/router';

declare var webkitSpeechRecognition: any;


@Component({
  selector: 'app-add-question',
  templateUrl: './add-question.component.html',
  styleUrls: ['./add-question.component.css']
})
export class AddQuestionComponent implements OnInit {
  recognition: any;
  activeField: any
  nameValue: any;
  emailValue: any;
  questionValue: any
  constructor(private homeNavDataServices: HomeNavDataservicesService,
    private questionService: QuestionServiceService,
    private router:Router) {
      
      this.recognition = new webkitSpeechRecognition();
    
      this.recognition.onresult = (event: any) => {
        const spokenText = event.results[0][0].transcript;
        if (this.activeField === 'question') {
          this.questionValue = spokenText;
          this.formData.question = this.questionValue;
        }
        
        
       
      }
  




     }
  Boolean: boolean = false;
  title: any
  question: any
  
  submit:any
  voiceInput:any;

  // for getting Question from frontpage
  formData = {
    event_id: localStorage.getItem('Id'),
    template:0,
    question: "",
  }


  // for loading a question form database to frontpage
  load_data() {
    let payload = this.formData.event_id
    // console.log(this.formData.event_id)
    this.questionService.getquestion({ event_id: payload }).subscribe((response: any) => { 
      this.question=response
    })

    console.log(this.question,"these is question from database")

  }

  ngOnInit(): void {
    this.homeNavDataServices.AddDashboard.next(true);
    this.homeNavDataServices.AddNav.next(false);
    this.title = localStorage.getItem('ParticipantName')
    this.load_data()
  }
  startListening(field: string) {
    this.activeField = field;
    this.recognition.start();
  }
  

  // for submit of question
  OnSubmit() {
    this.formData.question = this.formData.question.trim()
    const payload = this.formData
    console.log(payload)
    if (this.formData.question != '') {
      // console.log(this.formData)

      this.questionService.postQuestion(payload).subscribe((response: any) => {
        this.load_data()
        this.formData.question = '';
      })
    }
  }

  dashboard(){
    this.router.navigate(['/events'])
  }
  // for delete a question
  delete(Id:any){
this.questionService.deleteQuestion({question_id:Id}).subscribe((reponse:any)=>{
  this.load_data()
  this.formData.question = '';
})
  }

 


}

