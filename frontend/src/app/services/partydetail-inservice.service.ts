import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class PartydetailInserviceService {
  baseURL: string = environment.apiUrl;
  constructor(private http:HttpClient) { }
  // url="http://localhost:150/party_detail"
  url2=""
  users(){
    return this.http.get(this.url2)
  }
  postData(payload:any){
    console.log(payload ,"this payload of partyDetail")
    const headers = { 'content-type': 'application/json'}  
    console.log(this.baseURL)
    // const body=JSON.stringify(payload);
    // console.log(payload,"this is from partydetailin service in party-detail")
    // return this.http.post(this.baseURL+'dashboard/party_detail', payload,{'headers':headers});
    return this.http.post(this.baseURL+'dashboard/party_detail', payload,{'headers':headers});
  }

  countData(payload:any){
    // console.log("this is service and payload of count",payload)
    const headers = { 'content-type': 'application/json'}  
    // const body=JSON.stringify(payload);
    // console.log(payload,"this is from partydetailin service in count")
    return this.http.post(this.baseURL+'dashboard/count', payload,{'headers':headers});
  }
  // url="http://localhost:150/count"
}
