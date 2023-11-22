import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PollingInputsComponent } from './polling-inputs.component';

describe('PollingInputsComponent', () => {
  let component: PollingInputsComponent;
  let fixture: ComponentFixture<PollingInputsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PollingInputsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PollingInputsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
