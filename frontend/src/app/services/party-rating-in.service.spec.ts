import { TestBed } from '@angular/core/testing';

import { PartyRatingInService } from './party-rating-in.service';

describe('PartyRatingInService', () => {
  let service: PartyRatingInService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PartyRatingInService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
