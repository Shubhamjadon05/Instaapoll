import { TestBed } from '@angular/core/testing';

import { ParticipantserviceService } from './participantservice.service';

describe('ParticipantserviceService', () => {
  let service: ParticipantserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ParticipantserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
