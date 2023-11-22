import { TestBed } from '@angular/core/testing';

import { ParticipantDatagetserviceService } from './participant-datagetservice.service';

describe('ParticipantDatagetserviceService', () => {
  let service: ParticipantDatagetserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ParticipantDatagetserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
