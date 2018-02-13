import {Injectable} from '@angular/core';
import {FlightBookingService} from '../flight-booking-container/flight.booking.service';
import {PaymentService} from '../payment/payment.service';
import {SearchService} from '../search/search.service';

@Injectable()
export class CleanupService {

  constructor(private flightBookingService: FlightBookingService,
              private paymentService: PaymentService,
              private searchService: SearchService) {
  }

  cleanup() {
        this.flightBookingService.reset();
        this.paymentService.reset();
  }
}
