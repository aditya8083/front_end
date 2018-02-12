import {Injectable} from '@angular/core';
import {FlightInfo, PassengerCount} from '../search/search.flight.model';
import {FormGroup} from '@angular/forms';

@Injectable()
export class FlightBookingService {
  currentBooking: FlightInfo[] = [];
  passengers: PassengerCount;
  passengerSum: number;
  passengerDetailsFormGroup: FormGroup;

  constructor() {
  }


  getPassengerCountList(): number[] {
    if (this.passengers == null) {
      return [];
    } else {
        return Array(Object.values(this.passengers).reduce((a, b) => a + b, 0)).fill(0).map((x, i) => i);
    }
  }
}
