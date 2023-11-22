import { TestBed } from '@angular/core/testing';

import { ValidLinkServiceService } from './valid-link-service.service';

describe('ValidLinkServiceService', () => {
  let service: ValidLinkServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ValidLinkServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
