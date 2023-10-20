import { TestBed } from '@angular/core/testing';

import { PartydetailInserviceService } from './partydetail-inservice.service';

describe('PartydetailInserviceService', () => {
  let service: PartydetailInserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PartydetailInserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
