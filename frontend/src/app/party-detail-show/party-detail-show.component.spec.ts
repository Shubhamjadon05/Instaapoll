import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PartyDetailShowComponent } from './party-detail-show.component';

describe('PartyDetailShowComponent', () => {
  let component: PartyDetailShowComponent;
  let fixture: ComponentFixture<PartyDetailShowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PartyDetailShowComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PartyDetailShowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
