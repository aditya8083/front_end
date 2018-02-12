import {Injectable} from '@angular/core';
import {FlightInfo, PassengerCount} from '../search/search.flight.model';
import {FormGroup} from '@angular/forms';
import {HttpClient} from '@angular/common/http';
import {FlightDetailsRequest, FlightDetailsResponse} from '../models/flightDetails.model';
import {ApiLinks} from '../shared/api-links';
import {Utils} from '../shared/Utils';

@Injectable()
export class FlightBookingService {
  currentBooking: FlightInfo[] = [];
  passengers: PassengerCount;
  passengerSum: number;
  passengerDetailsFormGroup: FormGroup;
  detailsReviewed = false;
  loaded = false;
  flightDetailsResponse: FlightDetailsResponse;

  constructor(private httpClient: HttpClient) {
  }


  getPassengerCountList(): number[] {
    if (this.passengers == null) {
      return [];
    } else {
      return Array(Object.values(this.passengers).reduce((a, b) => a + b, 0)).fill(0).map((x, i) => i);
    }
  }

  fetchFlightDetails() {
    const flightDetailsRequest: FlightDetailsRequest = {
      destination: this.currentBooking[0].destination,
      originDepartDate: this.currentBooking[0].originDepartDate,
      adults: this.passengers.adult,
      children: this.passengers.child,
      infants: this.passengers.infant,
      flightType: 'ONEWAY',
      origin: this.currentBooking[0].origin,
      destinationArrivalDate: this.currentBooking[0].destinationArrivalDate,
      flightId: this.currentBooking[0].flightId
    };

    const url = ApiLinks.addParams(ApiLinks.flightDetailsBase, flightDetailsRequest);
    this.httpClient.get(url)
      .subscribe(data => {
        this.flightDetailsResponse = <FlightDetailsResponse> data;
      });
  }
}
