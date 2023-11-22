import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RatingserviceService {
  baseURL: string = environment.apiUrl;
  // url="http://localhost:900/rating"
  constructor(private http:HttpClient) { }

  users(payload:any){
    // console.log("this is service",payload)
    const headers = { 'content-type': 'application/json'}  
    // const body=JSON.stringify(payload);
    // console.log(payload,"this is body in rating services")
    return this.http.post(this.baseURL+'events/rating', payload,{'headers':headers});
  }

  raterCount(payload:any){
    const headers = { 'content-type': 'application/json'}  
    const body=JSON.stringify(payload);
    // console.log(payload,"this is body in rating services")
    return this.http.post(this.baseURL+'inputRating/raterCount', body,{'headers':headers});
  }

  getPollResult(payload:any){
    const headers = { 'content-type': 'application/json'}  
    const body=JSON.stringify(payload);
    // console.log(payload,"this is body in rating services")
    return this.http.post(this.baseURL+'inputRating/poll_result', body,{'headers':headers});
  }

  

  getOptions(payload:any){
    const headers = { 'content-type': 'application/json'}  
    const body=JSON.stringify(payload);
    // console.log(payload,"this is body in rating services")
    return this.http.post(this.baseURL+'inputRating/get_options', body,{'headers':headers});
  }


  getPollResultForOption(payload:any){
    const headers = { 'content-type': 'application/json'}  
    const body=JSON.stringify(payload);
    // console.log(payload,"this is body in rating services")
    return this.http.post(this.baseURL+'inputRating/pollresult', body,{'headers':headers});
  }

  

  getVoters(payload:any){
    const headers = { 'content-type': 'application/json'}  
    const body=JSON.stringify(payload);
    // console.log(payload,"this is body in rating services")
    return this.http.post(this.baseURL+'inputRating/voters', body,{'headers':headers});
  }

}
