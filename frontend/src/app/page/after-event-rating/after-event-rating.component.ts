import { Component,OnInit } from '@angular/core';

@Component({
  selector: 'app-after-event-rating',
  templateUrl: './after-event-rating.component.html',
  styleUrls: ['./after-event-rating.component.css']
})
export class AfterEventRatingComponent implements OnInit {
  ngOnInit(): void {
    alert("Thank you for submitting your rating!");
  }

}
