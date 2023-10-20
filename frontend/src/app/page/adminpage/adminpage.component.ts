import { Component, OnInit} from '@angular/core';
import { HomeNavDataservicesService } from 'src/app/new/home-nav-dataservices.service';
import { PartydetailInserviceService } from 'src/app/services/partydetail-inservice.service';

@Component({
  selector: 'app-adminpage',
  templateUrl: './adminpage.component.html',
  styleUrls: ['./adminpage.component.css']
})
export class AdminpageComponent implements OnInit {
constructor(private homeNavDataServices:HomeNavDataservicesService,
private partydetailservice:PartydetailInserviceService){

}
name:any
users:any
title:string="dashboard"
ngOnInit(): void {
  // console.log('subject emit')
    this.homeNavDataServices.AddDashboard.next(true);
    this.homeNavDataServices.AddNav.next(false);
this.name=localStorage.getItem('Name');
    this.load_data();
}

load_data(){
  let val =localStorage.getItem('check');
  this.partydetailservice.countData({user_id:val}).subscribe((response:any)=>{
    this.users=response[0].row_count
    // console.log(this.users,"this is console is in response")
    })
}
}
