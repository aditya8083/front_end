import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-flight-booking-container',
  templateUrl: './flight-booking-container.component.html',
  styleUrls: ['./flight-booking-container.component.css']
})
export class FlightBookingContainerComponent implements OnInit {

  isLinear = true;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  passengerDetailsFormGroup: FormGroup;

  constructor(private fb: FormBuilder) {
  }

  ngOnInit() {
    this.firstFormGroup = this.fb.group({
      firstCtrl: ''
    });
    this.secondFormGroup = this.fb.group({
      secondCtrl: ''
    });
  }

}
