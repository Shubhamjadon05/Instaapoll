import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PartytopicInserviceService {
  data:any
  url="http://localhost:500/"
  constructor(private http:HttpClient) { }
  postData(payloadIn:any){
    console.log("this is partytopic service","=",payloadIn)
    const headers = { 'content-type': 'application/json'}  
    const body=JSON.stringify(payloadIn);
    return this.http.post(this.url, body,{'headers':headers});
  }
}
