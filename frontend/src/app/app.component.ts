
// this is demo 
import { Component, OnInit, ElementRef,ViewChild } from '@angular/core';
import alanBtn from '@alan-ai/alan-sdk-web';
import { Router } from '@angular/router';
// import { SharedDataService } from './shared-data.service';
import { CommunicationService } from './communication.service';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  spokenTextInput: any;
  spokenWord :any
  inputData: string = 'Data from App Component';
  loginData : any;
  

  constructor(private el: ElementRef, private router: Router,private communicationService: CommunicationService) {}
  

  setDataForLoginComponent(speach:any) {
   

    this.communicationService.callLoginFunction(speach);
    
  }


  ngOnInit() {
    const alanKey = '97c1597b76913fc5d3d1ea5d5e5403772e956eca572e1d8b807a3e2338fdd0dc/stage';
    
let spokenTextInput:string = ''
let alanBtnElement = ''
let spokenWord =''

// Define Alan AI options
    const alanOptions = {
      key: alanKey,
      onCommand: (commandData: any) => {
       
        if (commandData.command === 'submit') {
        
          // this.communicationService.submitForm();
           this.communicationService.callSubmitFuntion("default");

        }
        


        if(commandData.command === 'email'){
          // console.log("email command running....")
          this.loginData = {type:"email", value:null};
        }

        if(commandData.command === 'password'){
          this.loginData = {type:"password", value:null};
        }

        if(commandData.command === 'conformPassword'){
          this.loginData = {type:"conformPassword", value:null};
        }

        if (commandData.command==='name'){
          this.loginData={type:"name",value:null};
        }



        // this Create Post Commants 
        if (commandData.command==='tittle'){
          this.loginData={type:"tittle",value:null};
        }

        if (commandData.command==='place'){
          this.loginData={type:"place",value:null};
        }

        if (commandData.command==='date'){
          this.loginData={type:"date",value:null};
        }

        if (commandData.command==='time'){
          this.loginData={type:"time",value:null};
        }
        if (commandData.command==='hour'){
          this.loginData={type:"hour",value:null};
        }

        if (commandData.command==='description'){
          this.loginData={type:"description",value:null};
        }





        
        





        // this this route page from voice commands 
        if (commandData.command === 'login ') {
                    this.router.navigate(['/login']);
                  } else if (commandData.command === 'register') {
                    this.router.navigate(['/register']);
                  } else if (commandData.command === 'view-rating') {
                    this.router.navigate(['/view-rating']);
                  } else if (commandData.command === 'events') {
                    this.router.navigate(['/events']);
                  } else if (commandData.command === 'dashboard') {
                    this.router.navigate(['/dashboard']);
                  } else if (commandData.command === 'profile') {
                    this.router.navigate(['/profile']);
                  } else if (commandData.command === 'createpost') {
                    this.router.navigate(['/add-event']);
          
                  } else if (commandData.command === 'enter name') {
                    this.router.navigate(['/add-event']);
                   }
                  else if (commandData.command==='enter email'){
                    this.router.navigate(['/Enter Email'])
                  }


        
      },
      onEvent:(e:any) => {
       
        // console.log(e,"an event on ai");
        if(!e.type){

          if(this.loginData && this.loginData.type){

            this.loginData.value = e.text
            this.setDataForLoginComponent(this.loginData);   
          }
    
        }
        }
        
    }
      
      
    
    
    

    alanBtn(alanOptions);

    

    
  }}




