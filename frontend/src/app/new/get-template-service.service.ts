import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GetTemplateServiceService {
  baseURL=environment.apiUrl

  constructor(private http:HttpClient) {}

   getTemplate(){
    const headers = { 'content-type': 'application/json'}  
    // const body=JSON.stringify(payload);
    return this.http.post(this.baseURL+'addQuestion/templateData',{'headers':headers});
   }

   updateTemplate(payload:any){
    const headers = { 'content-type': 'application/json'}  
    const body=JSON.stringify(payload);
    return this.http.post(this.baseURL+'addQuestion/InputTemplate',body,{'headers':headers});
   }
  }
