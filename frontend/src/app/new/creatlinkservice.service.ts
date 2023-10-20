import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CreatlinkserviceService {
  baseURL: string=environment.apiUrl;

  constructor(private http:HttpClient) { }
  creatlink(payload:any){
    console.log("this is eventlink data service",payload)
    const headers = { 'content-type': 'application/json'}  
    const body=JSON.stringify(payload);
    return this.http.post(this.baseURL+'creatlink', body,{'headers':headers});
  }
}
