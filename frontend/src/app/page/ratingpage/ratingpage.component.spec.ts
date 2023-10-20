import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RatingpageComponent } from './ratingpage.component';

describe('RatingpageComponent', () => {
  let component: RatingpageComponent;
  let fixture: ComponentFixture<RatingpageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RatingpageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RatingpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
