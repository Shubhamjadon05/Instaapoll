import { Component, OnInit } from '@angular/core';
import { HomeNavDataservicesService } from 'src/app/new/home-nav-dataservices.service';
import { ActivationEnd, Router } from '@angular/router';
import { ActivatedRoute,NavigationEnd  } from '@angular/router';
// import { filter } from 'rxjs/operators';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  currentRoute: string='';
  AddNav: boolean = false;
  AddDashboard: boolean = false;

  logOut(){
    this.router.navigate(['/login']);
    localStorage.removeItem('check');
    localStorage.removeItem('Id');
    localStorage.removeItem('ParticipantName');
    localStorage.removeItem('Name');
    localStorage.removeItem('Email');

  }


constructor(private homeNavDataService:HomeNavDataservicesService, private router:Router, private activeRoute:ActivatedRoute, private activatedRoute: ActivatedRoute){}
ngOnInit(): void {
  this.homeNavDataService.AddNav.subscribe({
    next : (val: boolean) => {
      // console.log(val)
      this.AddNav = val;
    }
  })
  this.homeNavDataService.AddDashboard.subscribe({
    next : (val: boolean) => {
      // console.log(val)
      this.AddDashboard = val;
    }
  })
}
}
