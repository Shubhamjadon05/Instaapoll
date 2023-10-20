import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PartyRatingInService } from '../services/party-rating-in.service';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-party-rating',
  templateUrl: './party-rating.component.html',
  styleUrls: ['./party-rating.component.css']
})
export class PartyRatingComponent {

  person: any
  formdata:any = {
    value: []
  }
  constructor(private partyratingservice:PartyRatingInService ,private http:HttpClient, private router:Router){
//     this.http.get('http://localhost:500/').subscribe((data: any) => {
//   //  console.log(data,"data come to party-rating"); // handle the response data here
//    this.person=data.map((val:any)=>{return {name: val.name, value: 0}})
//   //  console.log(this.person)
//    return this.person
//  });
 }

 

  Onsubmit(){
    // console.log(this.person,"this is formdata after submit")
    // this.partyratingservice.postData(this.person).subscribe((response:any)=>{
    //   return response
    // })
  }
  NextPage(){
    this.router.navigate(['/home']);
  }

}
