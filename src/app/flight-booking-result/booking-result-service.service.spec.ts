import { TestBed, inject } from '@angular/core/testing';

import { BookingResultService } from './booking-result-service.service';

describe('BookingResultService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BookingResultService]
    });
  });

  it('should be created', inject([BookingResultService], (service: BookingResultService) => {
    expect(service).toBeTruthy();
  }));
});
