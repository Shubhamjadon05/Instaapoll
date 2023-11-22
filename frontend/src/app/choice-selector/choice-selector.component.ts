// choice-selector.component.ts

import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-choice-selector',
  templateUrl: './choice-selector.component.html',
  styleUrls: ['./choice-selector.component.css']
})
export class ChoiceSelectorComponent {
  formData: any;

  constructor(private router: Router) {}

  onSubmit() {
    let id = this.formData.template_id;
    let event_id = localStorage.getItem('Id');
    // this.TemplateId(id, event_id)
    this.router.navigate(['/events']);
  }

  // Handle button 1 click
  onButton1Click() {
    // Add logic or navigation for button 1
    this.router.navigate(['/survey']);
  }

  // Handle button 2 click
  onButton2Click() {
    // Add logic or navigation for button 2
    this.router.navigate(['/question-template']);
  }
}
