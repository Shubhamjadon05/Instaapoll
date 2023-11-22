import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DeleteServiceService {
  baseURL: string=environment.apiUrl;
  constructor(private http:HttpClient) { }
  deleteData(payload:any){
    console.log(payload)
    const headers = { 'content-type': 'application/json'}  
    const body=JSON.stringify(payload);
    return this.http.post(this.baseURL+'events/delete', body,{'headers':headers});
  }
}
