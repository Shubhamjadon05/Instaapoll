import { TestBed } from '@angular/core/testing';

import { EventratingserviceService } from './eventratingservice.service';

describe('EventratingserviceService', () => {
  let service: EventratingserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EventratingserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
