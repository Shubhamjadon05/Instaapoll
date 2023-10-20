import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { application } from 'express';

@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {
  baseURL: string = environment.apiUrl;
  constructor(private http:HttpClient) { }


  postData(payload:any){
    // console.log("this is service",payload)
    const headers = { 'content-type': 'application/json'}  
    const body=JSON.stringify(payload);
    return this.http.post(this.baseURL+'user/login', body,{'headers':headers});
  }

  // postData(payload:any){
  //   const headers={'content-type':'application/json'}
  //   const body=JSON.stringify(payload);
  //   return this.http.post('this.baseURL+user/login',body,{'headers':headers})
  // }
  
  

}
