import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PartyRatingInService {
  baseURL: string=environment.apiUrl;
payload:any
  constructor(private http: HttpClient) { }
  eventRating(payload: any) {
// console.log(person)
    console.log("this is service",payload)
    const headers = { 'content-type': 'application/json' }
    const body = JSON.stringify(payload);
    // console.log(person, "this is for party_service file")
    return this.http.post(this.baseURL+'inputRating/eventRating', body, { 'headers': headers });
  }
}