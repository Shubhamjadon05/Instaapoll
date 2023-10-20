import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HomeNavDataservicesService } from 'src/app/new/home-nav-dataservices.service';
import { GetTemplateServiceService } from 'src/app/new/get-template-service.service';

@Component({
  selector: 'app-question-template',
  templateUrl: './question-template.component.html',
  styleUrls: ['./question-template.component.css']
})
export class QuestionTemplateComponent implements OnInit {
  constructor(private homeNavDataServices: HomeNavDataservicesService,
    private getTemplateService: GetTemplateServiceService,
    private router: Router,
  ) { }
  title: any
  TemplateName: any
  TemplateQuestion1: any
  TemplateQuestion2: any
  TemplateQuestion3: any
  // TemplateQuestion4:any

  formData = {
    template_id: ""
  }

  ngOnInit(): void {
    this.homeNavDataServices.AddDashboard.next(true);
    this.homeNavDataServices.AddNav.next(false);
    this.title = localStorage.getItem('ParticipantName')
    this.getTemplate()
  }

  // to send user to add questin page
  AddQuestion() {
    this.router.navigate(['/add-question']);
    let id = 0
    let event_id = localStorage.getItem('Id')
    this.TemplateId(id, event_id)
  }

  // to set a template
  getTemplate() {
    this.getTemplateService.getTemplate().subscribe((response: any) => {
      console.log(response.Name)
      this.TemplateName = response.Name
      this.TemplateQuestion1 = response.Question1
      this.TemplateQuestion2 = response.Question2
      this.TemplateQuestion3 = response.Question3
      this.TemplateQuestion3 = response.Question4

      console.log(this.TemplateQuestion1, "this is first", this.TemplateQuestion2, "this is secound",this.TemplateQuestion3,"this is third one")
    })
  }


  onSubmit() {
    // console.log(this.formData.template_id,"this is template id")
    let id = this.formData.template_id
    let event_id = localStorage.getItem('Id')
    this.TemplateId(id, event_id)
    this.router.navigate(['/events']);
  }

  TemplateId(id: any, event_id: any) {
    this.getTemplateService.updateTemplate({ template_id: id, event_id: event_id }).subscribe((response: any) => {
      // if (response.Boolean == 1) {
      //   this.router.navigate(['/events']);
      // }
    })
  }
}
