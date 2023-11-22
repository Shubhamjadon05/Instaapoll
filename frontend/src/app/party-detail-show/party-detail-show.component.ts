import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PartydetailInserviceService } from 'src/app/services/partydetail-inservice.service';
import { HomeNavDataservicesService } from '../new/home-nav-dataservices.service';
import { DeleteServiceService } from '../new/delete-service.service';
import { EventlinkserviceService } from '../new/eventlinkservice.service';
import { CreatlinkserviceService } from '../new/creatlinkservice.service';
// import { ValidLinkServiceService } from '../new/valid-link-service.service';
import { EditServiceService } from '../new/edit-service.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-party-detail-show',
  templateUrl: './party-detail-show.component.html',
  styleUrls: ['./party-detail-show.component.css']
})
export class PartyDetailShowComponent implements OnInit {
  users: any
  baseURL: string = environment.sideUrl;
  constructor(private router: Router,
    private partydetailservice: PartydetailInserviceService,
    private homeNavDataServices: HomeNavDataservicesService,
    private eventlinkservive: EventlinkserviceService,
    private creatlinkservice: CreatlinkserviceService,
    private deleteservice: DeleteServiceService,
    // private ValidateLinkService:ValidLinkServiceService,
    private editService: EditServiceService
  ) {
   

  }
  link: string = ''

  submit() {
    this.router.navigate(['/add-event']);
  }
  Rating(data: any, Name: any) {
    this.router.navigate(['/view-rating'])
    localStorage.setItem("Id", data)
    localStorage.setItem("ParticipantName", Name)
  }
  Polling(data: any, Name: any) {
    this.router.navigate(['polling-rating'])
    localStorage.setItem("Id", data)
    localStorage.setItem("ParticipantName", Name)
  }

  PollingSecret(data: any, Name: any) {
    this.router.navigate(['polling-result'])
    localStorage.setItem("Id", data)
    localStorage.setItem("ParticipantName", Name)
  }


  add(data: any, Name: any) {
    this.router.navigate(['/add-participant'])
    localStorage.setItem("Id", data)
    localStorage.setItem("ParticipantName", Name)
  }
  Delete(data: any) {
    this.deleteservice.deleteData({ event_id: data }).subscribe((Response: any) => {
      // console.log(Response)
      this.loadData();
    })
  }
  ngOnInit(): void {
    isLoading:
    // console.log('subject emit')
    this.homeNavDataServices.AddDashboard.next(true);
    this.loadData();
    // if (localStorage.getItem('check')) {
    //   let val = localStorage.getItem('check');
    //   this.partydetailservice.postData({ user_id: val }).subscribe((response: any) => {
    //     this.users = response
    //     console.log(this.users)
    //   })
    // } else {
    //   this.router.navigate(['/login'])
    // }
  }
  loadData() {
    if (localStorage.getItem('check')) {
      let val = localStorage.getItem('check');
      this.partydetailservice.postData({ user_id: val }).subscribe((response: any) => {
        this.users = response
        console.log(this.users)
      })
    } else {
      this.router.navigate(['/login'])
    }
  }

  displayStyle = "none";
  Title: any
  EventId: any
  Boolean: boolean = false
  linkExpiryMessage: string = ""
  openPopup(data: any, Name: any) {
    this.displayStyle = "block";
    localStorage.setItem("Id", data)
    localStorage.setItem("ParticipantName", Name)
    this.EventId = data
    this.link = this.baseURL + 'eventrating/' + data
    this.payload();
    // this.ValidateLink(data);
  }
  closePopup() {
    this.displayStyle = "none";
  }


  openPopupPolling(data: any, Name: any) {
    this.displayStyle = "block";
    localStorage.setItem("Id", data)
    localStorage.setItem("ParticipantName", Name)
    this.EventId = data
    this.link = this.baseURL + 'polling/' + data
    this.payload();
    // this.ValidateLink(data);
  }
  closePopupPolling() {
    this.displayStyle = "none";
  }
 

  payload() {
    this.Title = localStorage.getItem('ParticipantName')
    this.EventId = localStorage.getItem('Id')
  }

  // for sending data to eventlink table
  formData = {
    Hour: ""
    // Event: '',
    // Link: ''
  }
  OnSubmit() {
    // console.log(this.formData, "this is formData of creatlink")
    this.eventlinkservive.eventlink({ hour: this.formData.Hour, link: this.link, event_id: this.EventId }).subscribe((data: any) => {
      // console.log(data, "this is data in party Detail ts file")
      this.users = data
    })
  }
  creatlink() {
    this.creatlinkservice.creatlink({ event_id: this.EventId }).subscribe((data: any) => {

    })
  }
  creatlinkPolling() {
    this.creatlinkservice.creatlink({ event_id: this.EventId }).subscribe((data: any) => {

    })
  }

  Edit(id: any) {
    
  }
}
