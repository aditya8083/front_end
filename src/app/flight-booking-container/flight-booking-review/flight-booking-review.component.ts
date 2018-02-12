import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FlightBookingService} from '../flight.booking.service';
import {Properties} from '../../shared/properties';

@Component({
  selector: 'app-flight-booking-review',
  templateUrl: './flight-booking-review.component.html',
  styleUrls: ['./flight-booking-review.component.css']
})
export class FlightBookingReviewComponent implements OnInit {


  now;
  currency = Properties.currency;
  @Output('confirmed') confirmed = new EventEmitter<boolean>();
  // access form group from service


  constructor(protected flightBookingService: FlightBookingService) {
  }

  ngOnInit() {
    this.now = Date.now();
  }

  getAgeMillis(dob: string) {
    return this.now - Date.parse(dob);
  }

  getAge(dateString) {
    const birthDate = new Date(dateString);
    let age = this.now.getFullYear() - birthDate.getFullYear();
    const m = this.now.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && this.now.getDate() < birthDate.getDate())) {
      age--;
    }
    return age;
  }

  displayContactDetails() {
    return this.flightBookingService.passengerDetailsFormGroup.value['passengerContactDetailsGroup'].email + '   ' +
      this.flightBookingService.passengerDetailsFormGroup.value['passengerContactDetailsGroup'].telephoneNumber + '  ' +
      this.flightBookingService.passengerDetailsFormGroup.value['passengerContactDetailsGroup'].mobileNumber;
  }

  getTotalBookingPrice(): number {
    let amount = 0;
    for (const booking of this.flightBookingService.currentBooking) {
      amount = amount + booking.pricePerAdult;
    }
    return amount;
  }

  confirm() {
    this.flightBookingService.detailsReviewed = true;
    this.confirmed.emit(true);

  }
}
