import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatlinkformComponent } from './creatlinkform.component';

describe('CreatlinkformComponent', () => {
  let component: CreatlinkformComponent;
  let fixture: ComponentFixture<CreatlinkformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreatlinkformComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreatlinkformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
