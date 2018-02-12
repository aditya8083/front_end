import { TestBed, inject } from '@angular/core/testing';

import { BookingResultServiceService } from './booking-result-service.service';

describe('BookingResultServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BookingResultServiceService]
    });
  });

  it('should be created', inject([BookingResultServiceService], (service: BookingResultServiceService) => {
    expect(service).toBeTruthy();
  }));
});
