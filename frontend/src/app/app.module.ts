
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { FooterComponent } from './component/footer/footer.component';
import { AdminpageComponent } from './page/adminpage/adminpage.component';
import { RatingpageComponent } from './page/ratingpage/ratingpage.component';
import { AddmemberComponent } from './page/addmember/addmember.component';
import { BlockComponent } from './component/block/block.component';
import { PartyformComponent } from './page/partyform/partyform.component';
import { FormComponent } from './component/form/form.component';
import { PartyRatingComponent } from './party-rating/party-rating.component';
import { PartyDetailShowComponent } from './party-detail-show/party-detail-show.component';
import { SelectPartyComponent } from './page/select-party/select-party.component';
import { AddCompetitionComponent } from './page/add-competition/add-competition.component';
import { FrontPageComponent } from './page/front-page/front-page.component';
import { RagisterComponent } from './page/ragister/ragister.component';
import { ProfileComponent } from './page/profile/profile.component';
import { EventratingComponent } from './page/eventrating/eventrating.component';
import { CreatlinkformComponent } from './page/creatlinkform/creatlinkform.component';
import { AfterEventRatingComponent } from './page/after-event-rating/after-event-rating.component';
import { AddQuestionComponent } from './page/add-question/add-question.component';
import { RaterComponent } from './page/rater/rater.component';
import { ShowQuestionComponent } from './page/show-question/show-question.component';
import { QuestionTemplateComponent } from './page/question-template/question-template.component';
import { GoogleLoginComponent } from './google-login/google-login.component';
// import { SpeechDisplayComponent } from './speech-display/speech-display.component';
import { FormsModule } from '@angular/forms'; // Correctly placed FormsModule import
import { NgxPaginationModule } from 'ngx-pagination';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    FooterComponent,
    AdminpageComponent,
    RatingpageComponent,
    AddmemberComponent,
    BlockComponent,
    PartyformComponent,
    FormComponent,
    PartyRatingComponent,
    PartyDetailShowComponent,
    SelectPartyComponent,
    AddCompetitionComponent,
    FrontPageComponent,
    RagisterComponent,
    ProfileComponent,
    EventratingComponent,
    CreatlinkformComponent,
    AfterEventRatingComponent,
    AddQuestionComponent,
    RaterComponent,
    ShowQuestionComponent,
    QuestionTemplateComponent,
    GoogleLoginComponent,
    // SpeechDisplayComponent,
   
    // FormsModule should not be included here
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule, // Correctly placed FormsModule import
    HttpClientModule,
    NgxPaginationModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatProgressSpinnerModule,
    // RouterModule should not be included here
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

