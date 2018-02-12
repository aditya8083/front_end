import {AfterViewInit, Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {SearchService} from './search.service';
import {OneWay as OneWayFlightModel} from './search.flight.model';
import {ActivatedRoute} from '@angular/router';
import {Subscription} from 'rxjs/Subscription';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
  providers: []
})
export class SearchComponent implements OnInit, OnDestroy {

  routeSubscription: Subscription;


  constructor(private searchService: SearchService, private route: ActivatedRoute) {
  }

  ngOnInit() {
  }

  ngOnDestroy() {

  }


}
