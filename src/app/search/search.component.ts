import {AfterViewInit, Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {SearchService} from './search.service';
import {FlightInfo as OneWayFlightModel} from './search.flight.model';
import {ActivatedRoute} from '@angular/router';
import {Subscription} from 'rxjs/Subscription';
import {CleanupService} from '../shared/cleanup.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
  providers: []
})
export class SearchComponent implements OnInit, OnDestroy {

  routeSubscription: Subscription;


  constructor(private searchService: SearchService,
              private route: ActivatedRoute,
              private cleanupService: CleanupService) {
  }

  ngOnInit() {
    this.cleanupService.cleanup();
  }

  ngOnDestroy() {

  }


}
