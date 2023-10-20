import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PartyRatingComponent } from './party-rating.component';

describe('PartyRatingComponent', () => {
  let component: PartyRatingComponent;
  let fixture: ComponentFixture<PartyRatingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PartyRatingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PartyRatingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
