import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ParticipantserviceService {
  baseURL: string = environment.apiUrl;
data:any
  url=this.baseURL+"/Party"
  constructor(private http:HttpClient) { }
  users(){
    this.http.get(this.url).subscribe((data: any) => {
      console.log(data,"participant service is work fine"); // handle the response data here
    });
  }

  postData(payload:any){
    console.log("this is in participant service",payload)
    const headers = { 'content-type': 'application/json'}  
    const body=JSON.stringify(payload);
    return this.http.post(this.baseURL+'events/participant', body,{'headers':headers});
  }
  // url=http://localhost:500/participant (for postData)

  ratingData(payload:any){
    console.log("this is in participant service",payload)
    const headers = { 'content-type': 'application/json'}  
    const body=JSON.stringify(payload);
    return this.http.post(this.baseURL +'/ratingData', body,{'headers':headers});
  }
}

