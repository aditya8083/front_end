import {Component, Input, OnInit} from '@angular/core';
import {FlightInfo} from '../../search/search.flight.model';
import {FlightDetailsInfo, FlightDetailsResponse} from '../../models/flight-details.model';
import {FlightBookingService} from '../../flight-booking-container/flight.booking.service';
import {Utils} from '../Utils';

@Component({
  selector: 'app-flight-view',
  templateUrl: './flight-view.component.html',
  styleUrls: ['./flight-view.component.css']
})
export class FlightViewComponent implements OnInit {

  @Input('flight') flight: FlightInfo;
  // whether its dependent on flightBookingService
  @Input('dependent') dependent: boolean;
  @Input('flightDetails') flightDetails: FlightDetailsInfo;
  @Input('displayLess') displayLess = false;
  // must be overridden if not dependent and not displayLess
  @Input() totalPrice: number;
  @Input() showSeats = true;
  @Input() displaySummary = true;

  constructor(protected flightBookingService: FlightBookingService) { }

  ngOnInit() {
    if (this.dependent) {
      this.flightBookingService.loadedEmitter.subscribe(loaded => {
        this.flightDetails = this.flightBookingService.flightDetailsResponse.response.detailResult[0];
      });
      // this.displayLess = false;
    } else if (this.flightDetails != null) {
      // this.displayLess = false;
      // copy information from details object to info object
      this.flight = this.flightDetails;
      // copy price from attribute value as details dto does not contain price
      this.flight.totalPrice = this.totalPrice;
    }

  }

  getLogo(airline: string) {
    return Utils.getLogo(airline);
  }

}
