import { Component } from '@angular/core';

@Component({
  selector: 'app-creatlinkform',
  templateUrl: './creatlinkform.component.html',
  styleUrls: ['./creatlinkform.component.css']
})
export class CreatlinkformComponent {
  formData={
    hour:""
  }

  submit(){
    console.log(this.formData)
  }
  
displayStyle = "none";
  
  openPopup() {
    this.displayStyle = "block";
  }
  closePopup() {
    this.displayStyle = "none";
  }
}
