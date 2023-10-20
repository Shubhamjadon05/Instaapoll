import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PartyformComponent } from './partyform.component';

describe('PartyformComponent', () => {
  let component: PartyformComponent;
  let fixture: ComponentFixture<PartyformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PartyformComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PartyformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
