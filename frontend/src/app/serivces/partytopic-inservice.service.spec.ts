import { TestBed } from '@angular/core/testing';

import { PartytopicInserviceService } from './partytopic-inservice.service';

describe('PartytopicInserviceService', () => {
  let service: PartytopicInserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PartytopicInserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
