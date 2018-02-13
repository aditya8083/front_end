import {AfterViewInit, Component, ElementRef, Input, OnDestroy, OnInit, Renderer2, ViewChild} from '@angular/core';
import {FlightInfo} from '../search/search.flight.model';
import {FlightDetailsResponse} from '../models/flightDetails.model';
import {Subscription} from 'rxjs/Subscription';
import {SearchService} from '../search/search.service';

@Component({
  selector: 'app-flight-details',
  templateUrl: './flight-details.component.html',
  styleUrls: ['./flight-details.component.css']
})
export class FlightDetailsComponent implements OnInit, OnDestroy {


  @Input('flight') flight: FlightInfo;
  @ViewChild('flightDetailContainer') flightDetailContainer: ElementRef;
  @ViewChild('flightDetailContent') flightDetailContent: ElementRef;
  @ViewChild('fareDetailContainer') fareDetailContainer: ElementRef;
  @ViewChild('fareDetailContent') fareDetailContent: ElementRef;

  loaded = false;
  flightDetailsResponse: FlightDetailsResponse;
  flightDetailsResponseSubscription: Subscription;

  constructor(private renderer: Renderer2,
              private searchService: SearchService) {

  }

  ngOnInit() {
    // setting children programmatically
    this.renderer.appendChild(this.flightDetailContainer.nativeElement, this.flightDetailContent.nativeElement);
    this.renderer.appendChild(this.fareDetailContainer.nativeElement, this.fareDetailContent.nativeElement);

    // make call to fetch details for this particular flight
    this.flightDetailsResponseSubscription = this.searchService.fetchDetails(this.flight)
      .subscribe(data => {
        this.flightDetailsResponse = data;
        this.loaded = true;
      });
  }

  ngOnDestroy() {
    this.flightDetailsResponseSubscription.unsubscribe();
  }


}


