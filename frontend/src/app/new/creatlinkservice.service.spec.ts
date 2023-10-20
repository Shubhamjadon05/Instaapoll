import { TestBed } from '@angular/core/testing';

import { CreatlinkserviceService } from './creatlinkservice.service';

describe('CreatlinkserviceService', () => {
  let service: CreatlinkserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CreatlinkserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
