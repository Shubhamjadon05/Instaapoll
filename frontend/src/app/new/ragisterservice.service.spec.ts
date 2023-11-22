import { TestBed } from '@angular/core/testing';
import { RagisterserviceService } from './ragisterservice.service';

describe('RagisterserviceService', () => {
  let service: RagisterserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RagisterserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
