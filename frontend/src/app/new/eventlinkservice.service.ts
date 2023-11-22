import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EventlinkserviceService {
baseURL: string=environment.apiUrl;
  constructor(private http:HttpClient) { } 
 eventlink(payload:any){
// url=http://localhost:650/eventlink
    console.log("this is eventlink data service",payload)
    const headers = { 'content-type': 'application/json'}  
    const body=JSON.stringify(payload);
    return this.http.post(this.baseURL+'events/eventlink', body,{'headers':headers});
  }

  validateRatingPage(payload:any){
    const headers = { 'content-type': 'application/json'}  
    const body=JSON.stringify(payload);
    console.log(payload)
    return this.http.post(this.baseURL+'inputRating/validateRater', body,{'headers':headers});
  }
}
