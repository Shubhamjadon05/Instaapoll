import { TestBed } from '@angular/core/testing';

import { HomeNavDataservicesService } from './home-nav-dataservices.service';

describe('HomeNavDataservicesService', () => {
  let service: HomeNavDataservicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HomeNavDataservicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
