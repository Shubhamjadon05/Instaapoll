import { Component, OnInit, ElementRef } from '@angular/core';
import { PartyServiceService } from 'src/app/services/party-service.service';
import { HomeNavDataservicesService } from 'src/app/new/home-nav-dataservices.service';
import { EventlinkserviceService } from 'src/app/new/eventlinkservice.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { CommunicationService } from 'src/app/communication.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-partyform',
  templateUrl: './partyform.component.html',
  styleUrls: ['./partyform.component.css']
})
export class PartyformComponent implements OnInit {

  sharedDataService: any
  communicationService: any
  receivedData: any
  alanBtnInstance: any
  spokenWord: any

  data1: any;
  // to get login-form data
  data = localStorage.getItem('check');
  formData = {
    User: this.data,
    Template: 0,
    Name: "",
    Place: "",
    Date: "",
    Time: "",
    Description: "",
    Hour: 6
  }

  constructor(private route: Router,
    private http: HttpClient,
    private partyservice: PartyServiceService,
    private homeNavDataServices: HomeNavDataservicesService,
    private eventlinkservive: EventlinkserviceService,
    formBuilder: FormBuilder,
    communicationService: CommunicationService,
    private elementRef: ElementRef,
    private homeNavDataService: HomeNavDataservicesService,

  ) {
    communicationService.setLoginFunction(this.loginFunction.bind(this));

  }

  loginFunction(data: any) {
    this.setValuesForLogin(data);

  }


  displayheading: boolean = false
  baseURL: string = environment.sideUrl;


  OnSubmit() {
    // console.log(this.formData, "this is party_form party_form data")
    // localStorage.setItem("hour",this.formData.Hour)
    this.partyservice.postData(this.formData).subscribe((response: any) => {
      // console.log(response, "this is response in partyform")
      if (response.Boolean == 1) {
        this.displayheading = false
        this.homeNavDataServices.SubmitLink.next(true)
        this.GoToAddParticipant(response.Id)
        this.CreatLink(response.Id)

      }
      if (response.Boolean == 0) {
        this.displayheading = true
      }

    })
  }
  GoToAddParticipant(data: any) {
    this.route.navigate(['/add-participant'])
    localStorage.setItem("Id", data)
    localStorage.setItem("ParticipantName", this.formData.Name)
  }
  CreatLink(Id: any) {
    let link = this.baseURL + 'eventrating/' + Id
    this.SubmitLink(link, Id)
  }
  SubmitLink(link: any, Id: any) {
    this.eventlinkservive.eventlink({ hour: this.formData.Hour, link: link, event_id: Id }).subscribe((data: any) => {
      // console.log(data, "this is data after submit link is work")
    })
  }

  back() {
    this.route.navigate(['/events']);
  }

  ngOnInit(): void {
    // console.log('subject emit')
    this.homeNavDataServices.AddDashboard.next(true);




    
    this.homeNavDataService.AddNav.next(true);
    this.homeNavDataService.AddDashboard.next(false);


    
    

  }

  setValuesForLogin(loginData: any) {
    console.log("loginData", loginData);
    const element = this.elementRef.nativeElement.querySelector("#" + loginData.type);


    if (element) {
      console.log('Element found with ID: ' + loginData.type);
      if (!element.value) {
        element.value = loginData.value;

      }
    } else {
      console.log('Element not found with ID: ' + loginData.type);
      console.log('password  id not found' + loginData.type)


    }
  }
}
