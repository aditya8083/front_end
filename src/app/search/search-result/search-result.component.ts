import {Component, OnInit} from '@angular/core';
import {SearchService} from '../search.service';
import {FlightBookingService} from '../../flight-booking-container/flight.booking.service';
import {Router} from '@angular/router';
//  for one way flights
@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.css']
})
export class SearchResultComponent implements OnInit {

  displayDetails: boolean[] = [];


  constructor(public searchService: SearchService,
              private flightBookingService: FlightBookingService,
              private router: Router) {
  }

  ngOnInit() {
  }

  // communicating between services
  bookResult(i: number) {

    // [0][i] => 0 is for ONEWAY flights
    this.flightBookingService.currentBooking = [this.searchService.searchResultList[0][i]];
    this.flightBookingService.passengers = this.searchService.passengers;
    console.log('Booking for ' + i);
    // this.flightBookingService.fetchFlightDetails();
    this.router.navigate(['/booking', 'flight']);
  }

}
