
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { SurveyModel, QuestionRadiogroupModel } from "survey-core";
import { Model } from "survey-core";




const surveyJson = {

  firstPageIsStarted: true,
  startSurveyText: "Start Quiz",

  completedHtml: "<h4>You got <b>{correctAnswers}</b> out of <b>{questionCount}</b> correct answers.</h4>",
  completedHtmlOnCondition: [{
    expression: "{correctAnswers} == 0",
    html: "<h4>Unfortunately, none of your answers are correct. Please try again.</h4>"
  }, {
    expression: "{correctAnswers} == {questionCount}",
    html: "<h4>Congratulations! You answered all the questions correctly!</h4>"
  }],



  title: "Indian  History",
  pages: [
    
    {

    elements: [{
      type: "html",
      html: "You are about to start a quiz on  history. <br>You will have 10 seconds for every question and 25 seconds to end the quiz.<br>Enter your name below and click <b>Start Quiz</b> to begin."
    }, {
      type: "text",
      name: "username",
      titleLocation: "hidden",
      isRequired: true
    }],
  },



  {
    elements: [{
      type: "radiogroup",
      name: "libertyordeath",
      title: "Whose quote is this: \"Give me liberty, or give me death\"?",
      choicesOrder: "random",
      choices: [
        "John Hancock", "James Madison", "Patrick Henry", "Samuel Adams"
      ],
      correctAnswer: "Patrick Henry"
    }]
  },


  {
    elements: [{
      type: "radiogroup",
      name: "libertyordeath",
      title: "Whose quote is this: \"Give me liberty, or give me death\"?",
      choicesOrder: "random",
      choices: [
        "John Hancock", "James Madison", "Patrick Henry", "Samuel Adams"
      ],
      correctAnswer: "Patrick Henry"
    }]
  }, {
    elements: [{
      type: "radiogroup",
      name: "magnacarta",
      title: "Rohit playing no.1",
      choicesOrder: "random",
      choices: [
        "Yes",
        "No"
      ],
      correctAnswer: "Yes"
    }]
  }]
}

{
  elements: [{
    type: "radiogroup",
    name: "magnacarta",
    title: "Kohli playing no.4",
    choicesOrder: "random",
    choices: [
      "Yes",
      "no"
    ],
    correctAnswer: "Yes"
  }]



};

// const survey = new survey.Model(surveyJson);
// survey.startTimer();
// survey.stopTimer();






@Component({
  selector: 'app-survey',
  templateUrl: './survey.component.html',
  styleUrls: ['./survey.component.css']
})
export class SurveyComponent implements OnInit {
  title = 'My First Survey';
  surveyModel: Model = new SurveyModel;

  newQuestionText: string = '';
  username: any;

  startQuiz() {
    const quizStartMessage = `Hello ${this.username}! You are about to start a quiz on history. You will have 10 seconds for every question, and 25 seconds to end the quiz. Let's begin!`;

    const speechSynthesis = window.speechSynthesis;
    const speechUtterance = new SpeechSynthesisUtterance(quizStartMessage);
    speechSynthesis.speak(speechUtterance);
  }




  constructor(private http: HttpClient) { }


  ngOnInit(): void {




    const survey = new Model(surveyJson);
    this.surveyModel = survey;


    survey.startTimer();
    survey.stopTimer();


  }

  addCustomQuestion(): void {
    const newQuestion = this.createCustomQuestion();
    this.surveyModel.currentPage.addQuestion(newQuestion);


  }
  createCustomQuestion(): QuestionRadiogroupModel {
    const question = new QuestionRadiogroupModel(this.generateQuestionName());
    question.title = this.newQuestionText;
    question.choices = ['Yes', 'No'];
    return question;
  }

  generateQuestionName(): string {
    return 'question_' + new Date().getTime();
  }

  onSubmit(): void {
    const data = this.surveyModel.data;
    console.log('Submitted Data:', data);
  }
}
