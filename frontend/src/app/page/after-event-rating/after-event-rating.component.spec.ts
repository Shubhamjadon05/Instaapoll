import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AfterEventRatingComponent } from './after-event-rating.component';

describe('AfterEventRatingComponent', () => {
  let component: AfterEventRatingComponent;
  let fixture: ComponentFixture<AfterEventRatingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AfterEventRatingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AfterEventRatingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
