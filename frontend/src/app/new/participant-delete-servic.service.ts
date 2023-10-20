import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ParticipantDeleteServicService {

  baseURL: string = environment.apiUrl;
  constructor(private http:HttpClient) { 
  }
  delete(payload:any){
    const headers = { 'content-type': 'application/json'}  
    const body=JSON.stringify(payload);
    console.log("delete",payload)
    return this.http.post(this.baseURL+'events/deleteParticipant', body,{'headers':headers});
  }
}
