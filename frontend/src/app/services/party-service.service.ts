import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PartyServiceService {
  baseURL: string = environment.apiUrl;
  constructor(private http:HttpClient) { }
  public postData(person: any) {
    // console.log("this is service",payload)
    const headers = { 'content-type': 'application/json'}  
    const body=JSON.stringify(person);
    // console.log(person,"this is for party_service file")
    return this.http.post(this.baseURL+'events/party', body,{'headers':headers});
  }
  // url=http://localhost:1000/party
}
