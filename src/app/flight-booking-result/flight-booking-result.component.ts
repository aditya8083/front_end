import { Component, OnInit } from '@angular/core';
import {FlightBookingService} from '../flight-booking-container/flight.booking.service';
import {BookingResultService} from './booking-result-service.service';

@Component({
  selector: 'app-flight-booking-result',
  templateUrl: './flight-booking-result.component.html',
  styleUrls: ['./flight-booking-result.component.css']
})
export class FlightBookingResultComponent implements OnInit {

  constructor(protected flightBookingService: FlightBookingService,
              protected bookingResultService: BookingResultService) { }

  ngOnInit() {
  }

}
