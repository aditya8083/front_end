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
  superPnr: string;

  constructor(protected fbs: FlightBookingHistoryService, protected route: ActivatedRoute) {
  }

  ngOnInit() {
    this.valid = true;
    this.route.params.subscribe(
      params => {
        this.superPnr = params['superPnr'];
        console.log(this.superPnr);
        if (!this.superPnr) {
          this.badStatusCode = true;
          this.message = 'Please Enter a valid PNR';
        }
        this.loaded = false;
        this.reloadStuff();
      }
    );
  }

  reloadStuff() {
    this.loaded = false;
    this.badStatusCode = false;

    this.fbs.fetchBookingDetailsByPnr(this.superPnr).subscribe(
      data => {
        this.fbdr = <FlightBookingDetailsResponse>data;
        this.contactDetails = {
          email: this.fbdr.bookingDetails.bookingEmail,
          mobileNumber: this.fbdr.bookingDetails.phoneNumber
        };
        this.loaded = true;
        this.badStatusCode = false;
      },
      error2 => {
        this.badStatusCode = true;
        this.message = "Can't connect to micro service";
      }
    );
  }




}
