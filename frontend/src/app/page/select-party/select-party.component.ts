import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PartydetailInserviceService } from 'src/app/services/partydetail-inservice.service';

@Component({
  selector: 'app-select-party',
  templateUrl: './select-party.component.html',
  styleUrls: ['./select-party.component.css']
})
export class SelectPartyComponent {
  users: any
  constructor(private router: Router, private partydetailservice: PartydetailInserviceService) {
    this.partydetailservice.users().subscribe((data: any) => {
      console.log(data, "select party data")
      this.users = data
    })
  }

}
