import { Component, OnInit } from '@angular/core';
import { Route } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { EventlinkserviceService } from 'src/app/new/eventlinkservice.service';
import { SessionStorageService } from 'src/app/services/session-storage.service';


@Component({
  selector: 'app-rater',
  templateUrl: './rater.component.html',
  styleUrls: ['./rater.component.css']
})
export class RaterComponent implements OnInit {
  constructor(private route:ActivatedRoute,
    private router:Router,
    private eventLinkService:EventlinkserviceService,
    private sessionService:SessionStorageService
    ){}

  isLoading: boolean = false;
  displayheading:boolean=false;
  extractedId: any


  ngOnInit(): void {
    localStorage.removeItem('check');
    this.extractedId = this.route.snapshot.paramMap.get('eventId'); 
    
  }

  formData = {
    email: ""
  }
  onSubmit(){
    this.isLoading = true
    this.eventLinkService.validateRatingPage({event_id:this.extractedId, email:this.formData.email}).subscribe((response:any)=>{
     let raterId =response.raterId
      if (response.Boolean == 1) {
        this.isLoading = false
        this.sessionService.postData(this.extractedId)
        this.router.navigate([`eventrating/${this.extractedId}${raterId}`]);
      }
      else {
        this.displayheading = true
        // console.log(this.displayheading)
      }
    }) 
  }

}
