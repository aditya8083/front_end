import {Injectable} from '@angular/core';
import {FlightInfo, PassengerCount} from '../search/search.flight.model';
import {FormGroup} from '@angular/forms';
import {HttpClient} from '@angular/common/http';
import {FlightDetailsRequest, FlightDetailsResponse, PartialBookingRequest} from '../models/flight-details.model';
import {ApiLinks} from '../shared/api-links';

@Injectable()
export class FlightBookingService {
  // set externally
  currentBooking: FlightInfo[] = null;
  // set externally
  passengers: PassengerCount;
  passengerSum: number;
  // form reference, set externally
  passengerDetailsFormGroup: FormGroup;
  // when api calls are loading
  loaded = false;
  // details response for flight-details
  flightDetailsResponse: FlightDetailsResponse;

  constructor(private httpClient: HttpClient) {
  }

  reset() {
    this.currentBooking = null;
    this.passengers = null;
    this.flightDetailsResponse = null;
    this.passengerDetailsFormGroup = null;
  }

  getPassengerCountList(): number[] {
    if (this.passengers == null) {
      return [];
    } else {
      return Array(Object.values(this.passengers).reduce((a, b) => a + b, 0)).fill(0).map((x, i) => i);
    }
  }

  fetchFlightDetails() {
    this.loaded = false;
    const flightDetailsRequest: FlightDetailsRequest = {
      destination: this.currentBooking[0].destination,
      originDepartDate: this.currentBooking[0].originDepartDate,
      adults: this.passengers.adult,
      children: this.passengers.child,
      infants: this.passengers.infant,
      flightType: 'ONEWAY',
      origin: this.currentBooking[0].origin,
      destinationArrivalDate: this.currentBooking[0].destinationArrivalDate,
      flightId: this.currentBooking[0].flightId,
      doGenerate: true
    };

    const url = ApiLinks.addParams(ApiLinks.flightDetailsBase, flightDetailsRequest);
    this.httpClient.get(url)
      .subscribe(data => {
        this.flightDetailsResponse = <FlightDetailsResponse> data;
        this.loaded = true;
      });
  }



  createBooking() {

    const passengerArray = [];
    for (const passenger of this.passengerDetailsFormGroup.value['passengerBioFormArray']) {
      passengerArray.push({
        name : passenger.firstName + ' ' + passenger.lastName,
        age: passenger.age
      });
    }
    // create partial booking
    const partialBookingRequest: PartialBookingRequest = {
      phoneNumber: this.passengerDetailsFormGroup.value['passengerContactDetailsGroup'].mobileNumber,
      bookingEmail: this.passengerDetailsFormGroup.value['passengerContactDetailsGroup'].email,
      userId: this.passengerDetailsFormGroup.value['passengerContactDetailsGroup'].email,
      amount: this.flightDetailsResponse.response.totalPrice,
      superPnr: this.flightDetailsResponse.response.superPnr,
      bookingStatus: 'PENDING',
      paymentId: null,
      bookingType: 'flight',
      bookingSource: 'WEB',
      passengers: passengerArray,
      paymentStatus: 'PENDING'
    };
    // const url = ApiLinks.addParams(ApiLinks.flightCreateBooking, partialBookingRequest);
    this.httpClient.post(ApiLinks.flightCreateBooking, partialBookingRequest)
      .subscribe(
        data => {console.log(data);
        }
      );

  }
}
