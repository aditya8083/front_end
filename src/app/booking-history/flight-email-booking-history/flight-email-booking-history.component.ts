import { Component, OnInit } from '@angular/core';
import {FlightBookingDetailsResponse} from '../../models/booking-details.model';

@Component({
  selector: 'app-flight-email-booking-history',
  templateUrl: './flight-email-booking-history.component.html',
  styleUrls: ['./flight-email-booking-history.component.css']
})
export class FlightEmailBookingHistoryComponent implements OnInit {

  bookings: FlightBookingDetailsResponse;

  constructor() { }

  ngOnInit() {
  }



}
