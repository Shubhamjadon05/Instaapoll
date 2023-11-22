import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PollingRatingComponent } from './polling-rating.component';

describe('PollingRatingComponent', () => {
  let component: PollingRatingComponent;
  let fixture: ComponentFixture<PollingRatingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PollingRatingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PollingRatingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
