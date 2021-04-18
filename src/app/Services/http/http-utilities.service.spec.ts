import { TestBed } from '@angular/core/testing';

import { HttpUtilitiesService } from './http-utilities.service';

describe('HttpUtilitiesService', () => {
  let service: HttpUtilitiesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HttpUtilitiesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
