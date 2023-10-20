import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MemberServiceService {
  baseURL: string = environment.apiUrl;
  constructor(private http:HttpClient) { }
  public postData(payload:any){
    console.log("this is member service",payload)
    const headers = { 'content-type': 'application/json'}  
    const body=JSON.stringify(payload);
    return this.http.post(this.baseURL+ 'events/Add_Member', body,{'headers':headers});
  }
  // url='http://localhost:100/Add_Member'
}