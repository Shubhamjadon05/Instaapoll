
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EventratingserviceService } from 'src/app/new/eventratingservice.service';
import { PartyRatingInService } from 'src/app/services/party-rating-in.service';
import { QuestionServiceService } from 'src/app/new/question-service.service';
import { ValidLinkServiceService } from 'src/app/new/valid-link-service.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { startWith, map } from 'rxjs/operators';
import { AbstractControl, FormControl, FormGroup, ValidatorFn, Validators } from '@angular/forms';
declare var webkitSpeechRecognition: any;


@Component({
  selector: 'app-polling-inputs',
  templateUrl: './polling-inputs.component.html',
  styleUrls: ['./polling-inputs.component.css']
})
// export class PollingInputsComponent {

// }



export class PollingInputsComponent implements OnInit {

  // field1: string = '1';


  field1 = new FormControl();
  field2 = new FormControl();
  field3 = new FormControl();
  eventid: any = this.route.snapshot.paramMap.get('eventId');
  field1Suggestions!: Observable<string[]>;
  autocompleteForm: any;
  displayheading: boolean = false;
  myForm: any;
  recognition: any;
  activeField: any;
  field1Value: any;
  field2Value: any;
  field3Value: any;





  constructor(private route: ActivatedRoute,
    private router: Router,
    private eventratingservice: EventratingserviceService,
    private eventRatingInputService: PartyRatingInService,
    private questionService: QuestionServiceService,
    private validateLinkService: ValidLinkServiceService) {


      

    this.myForm = new FormGroup({
      field1: new FormControl('', [Validators.required]),
      field2: new FormControl('', [Validators.required]),
      field3: new FormControl('', [Validators.required, Validators.pattern(/^[0-9]{10}$/)]),
    });



    // Voice recognize start here 

    this.recognition = new webkitSpeechRecognition();
      this.recognition.addEventListener('end', () => {
      
        if (this.activeField === 'field1') {
          console.log("satart listeneing to field 1");
          this.startListening('field2');
        }
        else if
          (this.activeField==='field2'){
          console.log("satart listeneing to field 2");

            this.startListening('field3')

          }

        
         
         else {
          this.recognition.stop();
        }
      });
      this.recognition.onresult = (event: any) => {

      const spokenText = event.results[0][0].transcript;

      if (this.activeField === 'field1') {
        console.log("fillling value for field 1", spokenText);

        this.field1Value = spokenText;
        // this.myForm.value.field1 = this.field1Value;
        this.myForm.patchValue({
          field1: spokenText,
         
        });

      } else if (this.activeField === 'field2') {
        console.log("fillling value for field 2", spokenText);

        this.field2Value = spokenText;
        this.myForm.patchValue({
          field2: spokenText,
         
        });

      }
      else if (this.activeField === 'field3') {
        console.log("fillling value for field3", spokenText);

        this.field3Value = spokenText;
        this.myForm.patchValue({
          field3: spokenText,
         
        });

      }


    }
    // end Here 

  }

  isListening: boolean = false;

  // Helper method to simulate a click on a button
 


   startListening = async (field: string)  =>{
    this.activeField = field;
    this.isListening = true; // Set the listening flag to true
    // const startTime = Date.now();
    await this.recognition.start();

   
  }

  


  // For show a link expary or not
  ExparyMessage: Boolean = true
  displayStyle = "none";
  displayContainer = "none"
  displayError = false
  displayLoading = "none"

  isLoading = false

  //for display and submit rating 
  person: any
  ratingData: any = {
    value: ''
  }
  selectedOption: any = []

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

    // this.field1Suggestions = this.field1.valueChanges.pipe(
    //   startWith(''),
    //   map(value => {
    //     console.log(this.field1, "curent inputed value")
    //     return this.filterSuggestions(value)
    //   })
    // );

  }

  

  // for set the time for rating
  validateLink(Id: any) {
    this.validateLinkService.validate({ event_id: Id }).subscribe((response: any) => {
      console.log(response.Boolean)
      if (response.Boolean == 1) {
        this.displayContainer = "block"
        this.ExparyMessage = false
        this.participantData();
      }
      else {
        this.displayContainer = "none"
      }
    })

  }

  // template:any
  participantData() {
    let val = this.extractedId;
    console.log(val, "this is value in ts component");
    this.isLoading = true;
    this.displayLoading = "block"

    this.eventratingservice.participantName({ event_id: val }).subscribe((response: any) => {
      this.event = response.eventDetail
      this.participants = response.participantsDetail.map((val: any) => { return { ...val, rating: [] } })
      this.question = response.questions.map((val: any, i: number) => { return { que_id: val.Id, question: val.Question, participants: [...this.participants] } })

      this.isLoading = false
      this.displayLoading = "none"
      // this.template=response.eventDetail.template
    })

  }



  // For submit of rating
  Rating: {
    house_num: string; question: number, participant: number, rating: number
  }[] = []

  existingField2s: string[] = [];

  Onsubmit() {
    // this.myForm = new FormGroup({
    //   field1: new FormControl('', [Validators.required]),
    //   field2: new FormControl('', [Validators.required]),
    //   field3: new FormControl('', [Validators.required]),
    // });


    console.log(this.myForm, "Formdata");
    this.existingField2s = [];


    // if (this.existingField2s.includes(this.field2)) {
    //   console.error("Field2 already exists. Form not submitted.",this.field2);
    //   return;
    // }

    for (let i = 0; i < this.question.length; i++) {
      // for (let j = 0; j < this.participants.length; j++) {
        console.log(this.myForm, "my form values");
        const field1Value = this.myForm.get('field1')?.value;
        const field2Value = this.myForm.get('field2')?.value;
        const field3Value = this.myForm.get('field3')?.value;  
        let newArray: any = {
          question: this.question[i].que_id,
          participant: this.selectedOption[i],
          rating: this.participants[0].rating[i],
          name: field1Value,
          house_num: field2Value,
          phone: field3Value,
          eventid: this.eventid,

        }
        this.Rating.push(newArray)
        this.existingField2s.push(this.field2.value);
      // }
    }



    this.eventRatingInputService.polling(this.Rating).subscribe((response: any) => {
      // console.log(response, "this is response form nodejs")
      if (response.Boolean == 1) {
        this.displayStyle = "block";
        this.displayContainer = "none"
      }
      else {
        console.error("House number already exists. Form not submitted.", this.field2);
        this.displayError = true;
        this.resetFormState();
      }
    })
  }

  resetFormState() {
    this.Rating = [];
    this.field1.reset(); // Assuming field1 is a FormControl
    this.field2.reset();
    this.field3.reset()
    this.selectedOption = [];
  }
  onCheckboxChange(value: any) {
    console.log(value, "value selected")
    this.selectedOption.push(value.target.defaultValue);
  }

  //function for filter suggestions
  filterSuggestions(value: string): string[] {
    // Implement logic to filter suggestions based on the entered value
    // For example, filter a predefined list of suggestions
    const suggestions: string[] = ['', '', ''];
    console.log(value, "inputed value")
    return suggestions.filter(option => option.toLowerCase().includes(value.toLowerCase()));
  }

  checkField2Uniqueness(value: string): boolean {
    return !this.existingField2s.includes(value);
  }


}

