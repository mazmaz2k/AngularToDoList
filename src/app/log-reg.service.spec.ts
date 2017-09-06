import { TestBed, inject } from '@angular/core/testing';

import { LogRegService } from './log-reg.service';

describe('LogRegService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LogRegService]
    });
  });

  it('should be created', inject([LogRegService], (service: LogRegService) => {
    expect(service).toBeTruthy();
  }));
});
