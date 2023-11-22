import { Component, OnInit } from '@angular/core';
import { HomeNavDataservicesService } from 'src/app/new/home-nav-dataservices.service';

@Component({
  selector: 'app-front-page',
  templateUrl: './front-page.component.html',
  styleUrls: ['./front-page.component.css']
})
export class FrontPageComponent implements OnInit {
  constructor(private homenavdata:HomeNavDataservicesService){}
 ngOnInit(): void {
     
 }

}
