import {Component, Input, OnInit} from '@angular/core';
import {FlightInfo} from '../../search/search.flight.model';
import {FlightDetailsResponse} from '../../models/flightDetails.model';
import {FlightBookingService} from '../../flight-booking-container/flight.booking.service';
import {Utils} from '../Utils';

@Component({
  selector: 'app-flight-view',
  templateUrl: './flight-view.component.html',
  styleUrls: ['./flight-view.component.css']
})
export class FlightViewComponent implements OnInit {

  @Input('flight') flight: FlightInfo;
  @Input('dependent') dependent: boolean;

  constructor(protected flightBookingService: FlightBookingService) { }

  ngOnInit() {
  }

  getLogo(airline: string) {
    return Utils.getLogo(airline);
  }

}
