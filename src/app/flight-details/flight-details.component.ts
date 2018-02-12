import {AfterViewInit, Component, ElementRef, Input, OnInit, Renderer2, ViewChild} from '@angular/core';
import {FlightInfo} from '../search/search.flight.model';

@Component({
  selector: 'app-flight-details',
  templateUrl: './flight-details.component.html',
  styleUrls: ['./flight-details.component.css']
})
export class FlightDetailsComponent implements OnInit {


  @Input('flight') flight: FlightInfo;
  @ViewChild('flightDetailContainer') flightDetailContainer: ElementRef;
  @ViewChild('flightDetailContent') flightDetailContent: ElementRef;
  @ViewChild('fareDetailContainer') fareDetailContainer: ElementRef;
  @ViewChild('fareDetailContent') fareDetailContent: ElementRef;

  constructor(private renderer: Renderer2) {

  }

  ngOnInit() {
    this.renderer.appendChild(this.flightDetailContainer.nativeElement, this.flightDetailContent.nativeElement);
    this.renderer.appendChild(this.fareDetailContainer.nativeElement, this.fareDetailContent.nativeElement);
  }


}


