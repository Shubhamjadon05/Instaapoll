import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PollingResultComponent } from './polling-result.component';

describe('PollingResultComponent', () => {
  let component: PollingResultComponent;
  let fixture: ComponentFixture<PollingResultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PollingResultComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PollingResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
