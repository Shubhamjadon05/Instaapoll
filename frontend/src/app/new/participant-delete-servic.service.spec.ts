import { TestBed } from '@angular/core/testing';

import { ParticipantDeleteServicService } from './participant-delete-servic.service';

describe('ParticipantDeleteServicService', () => {
  let service: ParticipantDeleteServicService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ParticipantDeleteServicService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
