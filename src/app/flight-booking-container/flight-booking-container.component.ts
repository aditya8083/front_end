import {AfterViewInit, Component, ElementRef, OnInit, Renderer2, ViewChild} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {FlightBookingService} from './flight.booking.service';
import {Router} from '@angular/router';
import {MatStep, MatStepper} from '@angular/material';
import {StepperSelectionEvent} from '@angular/cdk/stepper';

@Component({
  selector: 'app-flight-booking-container',
  templateUrl: './flight-booking-container.component.html',
  styleUrls: ['./flight-booking-container.component.css']
})
export class FlightBookingContainerComponent implements OnInit, AfterViewInit {

  isLinear = true;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  @ViewChild('stepper') stepper: MatStepper;
  @ViewChild('tabPassengerDetails') tabPassengerDetails: MatStep;
  @ViewChild('tabReview') tabReview: MatStep;

  constructor(private fb: FormBuilder,
              protected flightBookingService: FlightBookingService,
              private router: Router,
              private renderer: Renderer2) {
  }

  ngOnInit() {
    this.firstFormGroup = this.fb.group({
      firstCtrl: ''
    });
    this.secondFormGroup = this.fb.group({
      secondCtrl: ''
    });


    // if the path is accessed directly instead of through search results, then navigate back to homepage
    if (this.flightBookingService.currentBooking == null) {
      console.log('Invalid Booking Attempt');
      this.router.navigate(['']);
    }

    // fetch details for current flight.
    this.flightBookingService.fetchFlightDetails();

  }

  ngAfterViewInit() {
    console.log(this.tabPassengerDetails);

    // set step control of passenger detail tab as form group reference in service
    this.tabPassengerDetails.stepControl = this.flightBookingService.passengerDetailsFormGroup;


  }

  confirmed() {
    // disable previous steppers
    this.tabReview.editable = false;
    this.tabPassengerDetails.editable = false;

    // do more things maybe?
  }

}
