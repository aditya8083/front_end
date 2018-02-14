import {Component, Input, OnInit} from '@angular/core';
import {Passenger} from '../../models/booking-details.model';
import {ContactDetails} from '../../models/booking-details.model';

@Component({
  selector: 'app-flight-booking-history-view',
  templateUrl: './flight-booking-history-view.component.html',
  styleUrls: ['./flight-booking-history-view.component.css']
})
export class FlightBookingHistoryViewComponent implements OnInit {

  @Input() passengers: Passenger[];
  @Input() contactDetails: ContactDetails;

  constructor() { }

  ngOnInit() {
  }

}
