import {Component, OnInit} from '@angular/core';
import {FlightBookingHistoryService} from '../flight-booking-history.service';
import {ContactDetails, FlightBookingDetailsResponse} from '../../models/booking-details.model';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-flight-superpnr-booking-history',
  templateUrl: './flight-superpnr-booking-history.component.html',
  styleUrls: ['./flight-superpnr-booking-history.component.css']
})
export class FlightSuperpnrBookingHistoryComponent implements OnInit {

  valid = false;
  loaded = false;
  badStatusCode = false;
  message: string;
  fbdr: FlightBookingDetailsResponse;
  contactDetails: ContactDetails;


  constructor(protected fbs: FlightBookingHistoryService, protected route: ActivatedRoute) {
  }

  ngOnInit() {
    if (this.fbs.superPnr) {
      this.valid = true;
      this.fbs.fetchBookingDetailsByPnr(this.fbs.superPnr)
        .subscribe(
          data => {
            this.fbdr = <FlightBookingDetailsResponse> data;
            // set contact details to send to history view
            this.contactDetails = {
              email: this.fbdr.bookingDetails.bookingEmail,
              mobileNumber: this.fbdr.bookingDetails.phoneNumber
            };
            this.loaded = true;
          },
          error2 => {
            this.badStatusCode = true;
            this.message = 'Unable to connect to micro service';
            this.loaded = true;
          });
    }
    // else if (this.route.snapshot.params[''])
  }


}
