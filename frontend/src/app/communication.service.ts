import { Injectable } from '@angular/core';
// import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CommunicationService {
  data: string = '';
  submitForm() {
    this.loginFunction({ type: 'submit' });
  }


  //functions
  loginFunction: ((data: any) => void) | any
  submitFunction: ((data: any) => void) | any

  setLoginFunction(func: (data: any) => void) {
    this.loginFunction = func;
    
    
  }
  
  
  setSubmitFuntion(func: (data: any) => void) {
    this.submitFunction = func;
    
    
  }
  //  this funtion for Paassword field 

  callLoginFunction(data: any) {
    console.log("call to login funcition")
    if (this.loginFunction) {
      console.log("in side the if of login  ")

      this.loginFunction(data);
 

      
    }
    
  }

  callSubmitFuntion(data: any) {
    console.log("call to login funcition")
    if (this.submitFunction) {
      console.log("in side the if of login  ")

      this.submitFunction(data);
 

      
    }
    
  }


}
