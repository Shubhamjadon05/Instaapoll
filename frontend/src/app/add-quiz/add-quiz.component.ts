import { Component, OnInit } from '@angular/core';
import { HomeNavDataservicesService } from '../new/home-nav-dataservices.service';
import { QuestionServiceService } from '../new/question-service.service';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

declare var webkitSpeechRecognition: any;



@Component({
  selector: 'app-add-quiz',
  templateUrl: './add-quiz.component.html',
  styleUrls: ['./add-quiz.component.css']
})
export class AddQuizComponent implements OnInit  {
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
  type: any
  
  submit:any
  voiceInput:any;

  // for getting Question from frontpage
  formData = {
    event_id: localStorage.getItem('Id'),
    template:0,
    question: "",
    type:"",
    inputText:"",
    trueFalse:""
  }
  enteredTexts: string[] = [];
  errorMessage: string = ''


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
  showInput: boolean = false;
  showTrueFalseOptions: boolean = false;

  
  showOptions(event: any) {


    console.log("option selected ", event.target.value)
    // this.formData.type=event.target.value
    console.log(this.formData)
    this.errorMessage = '';

    // You can add more validation here if needed

    // Show the input and button only for type 1
    if (this.formData.type === '1') {
      // Reset input text
      this.formData.inputText = '';
    }


}

// addText() {
//   if (this.formData.inputText) {
//     this.enteredTexts.push(this.formData.inputText);
//     // Reset input text after adding
//     this.formData.inputText = '';
//   } else {
//     this.errorMessage = 'Error: Invalid Question';
//   }
// }

addText() {
  if (this.formData.inputText) {
    // Add the entered text to the list of questions
    const newQuestion = { Id: this.question.length + 1, Question: this.formData.inputText };
    this.question.push(newQuestion);

    // Reset input text after adding
    this.formData.inputText = '';

    // You can do something with the new question if needed
    console.log('New question added:', newQuestion);
  } else {
    this.errorMessage = 'Error: Invalid Question';
  }
}

addTrueFalse() {
  if (this.formData.trueFalse) {
    const newQuestion = { Id: this.question.length + 1, Question: this.formData.trueFalse };
    this.question.push(newQuestion);

    // Reset the selected option after adding
    this.formData.trueFalse = '';

    // You can do something with the new question if needed
    console.log('New True/False question added:', newQuestion);
  } else {
    this.errorMessage = 'Error: Invalid Question';
  }
}



onTypeChange(event: any) {
  this.formData.type = event.target.value;
  // Optionally, you can perform additional actions based on the selected type
}


}

