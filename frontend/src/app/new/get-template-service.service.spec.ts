import { TestBed } from '@angular/core/testing';

import { GetTemplateServiceService } from './get-template-service.service';

describe('GetTemplateServiceService', () => {
  let service: GetTemplateServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetTemplateServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
