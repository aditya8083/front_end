import {Component, Input, OnInit} from '@angular/core';
import {FlightInfo} from '../../search/search.flight.model';

@Component({
  selector: 'app-flight-view',
  templateUrl: './flight-view.component.html',
  styleUrls: ['./flight-view.component.css']
})
export class FlightViewComponent implements OnInit {

  @Input('flight') flight: FlightInfo;

  constructor() { }

  ngOnInit() {
    console.log('flight view message');
    console.log(this.flight);
  }

}
