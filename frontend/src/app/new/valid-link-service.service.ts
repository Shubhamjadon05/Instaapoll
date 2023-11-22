import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ValidLinkServiceService {

  constructor(private http:HttpClient) { }
  baseURL=environment.apiUrl
  validate(payload:any){
    console.log("this is eventlink data service",payload)
    const headers = { 'content-type': 'application/json'}  
    const body=JSON.stringify(payload);
    return this.http.post(this.baseURL+'validating-link/validating-link', body,{'headers':headers});
  }
}
