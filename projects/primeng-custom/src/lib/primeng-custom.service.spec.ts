import { TestBed } from '@angular/core/testing';

import { PrimengCustomService } from './primeng-custom.service';

describe('PrimengCustomService', () => {
  let service: PrimengCustomService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PrimengCustomService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
