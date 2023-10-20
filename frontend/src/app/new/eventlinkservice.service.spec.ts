import { TestBed } from '@angular/core/testing';

import { EventlinkserviceService } from './eventlinkservice.service';

describe('EventlinkserviceService', () => {
  let service: EventlinkserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EventlinkserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
