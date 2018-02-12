import {Injectable} from '@angular/core';
import {OneWay, PassengerCount} from '../search/search.flight.model';

@Injectable()
export class FlightBookingService {
  currentBooking: OneWay;
  passengers: PassengerCount;
  passengerSum: number;

  constructor() {
    console.log('flight booking service getting created');
  }


  getPassengerCountSum() {
    if (this.passengers == null) {
      console.log('Invalid Booking Method');
      console.log(this.passengers);
    } else {
        return Object.values(this.passengers).reduce((a, b) => a + b, 0);
    }
  }
}
