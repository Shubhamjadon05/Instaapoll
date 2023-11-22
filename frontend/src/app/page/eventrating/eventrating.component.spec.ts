import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventratingComponent } from './eventrating.component';

describe('EventratingComponent', () => {
  let component: EventratingComponent;
  let fixture: ComponentFixture<EventratingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EventratingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EventratingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
