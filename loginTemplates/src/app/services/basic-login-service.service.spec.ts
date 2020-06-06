import { TestBed } from '@angular/core/testing';

import { BasicLoginServiceService } from './basic-login-service.service';

describe('BasicLoginServiceService', () => {
  let service: BasicLoginServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BasicLoginServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
