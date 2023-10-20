import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class QuestionServiceService {
baseURL=environment.apiUrl
  constructor(private http:HttpClient) { }
  postQuestion(payload:any){
    console.log(payload)
    const headers = { 'content-type': 'application/json'}  
    const body=JSON.stringify(payload);
    return this.http.post(this.baseURL+'addQuestion/addQuestion', body,{'headers':headers});
  }

  getquestion(payload:any){
    // console.log(payload,"this is form getquestion service")
    const headers ={'content-type':'application/json'}
    const body=JSON.stringify(payload);
    return this.http.post(this.baseURL+'addQuestion/showQuestion', body,{'headers':headers})

  }

  deleteQuestion(payload:any){
    const headers ={'content-type':'application/json'}
    const body=JSON.stringify(payload);
    return this.http.post(this.baseURL+'addQuestion/delete', body,{'headers':headers})
  }
}
