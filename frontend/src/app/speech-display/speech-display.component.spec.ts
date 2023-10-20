import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpeechDisplayComponent } from './speech-display.component';

describe('SpeechDisplayComponent', () => {
  let component: SpeechDisplayComponent;
  let fixture: ComponentFixture<SpeechDisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpeechDisplayComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SpeechDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
