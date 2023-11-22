import { Component,OnInit } from '@angular/core';
import { HomeNavDataservicesService } from 'src/app/new/home-nav-dataservices.service';

@Component({
  selector: 'app-profile ',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  email:any
  name:any
  constructor(private homeNavDataServices:HomeNavDataservicesService){}
  ngOnInit(): void {
    console.log('subject emit')
      this.homeNavDataServices.AddDashboard.next(true);
      this.homeNavDataServices.AddNav.next(false);
      this.email =localStorage.getItem('Email')
      this.name =localStorage.getItem('Name')
  }

}
