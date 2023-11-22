import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RagisterserviceService {
  baseURL: string = environment.apiUrl;

  constructor(private http:HttpClient) { }
   postData(payload:any){
    // console.log("this is service",payload)
    const headers = { 'content-type': 'application/json'}  
    const body=JSON.stringify(payload);
    return this.http.post(this.baseURL+'ragestation/ragister', body,{'headers':headers});
  }
  // url='http://localhost:50/ragister'
}
