import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormArray, FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {SeatDetail} from './passenger.details.model';
import {FlightBookingService} from '../flight.booking.service';
import {Location} from '@angular/common';

@Component({
  selector: 'app-passenger-details',
  templateUrl: './passenger-details.component.html',
  styleUrls: ['./passenger-details.component.css']
})
export class PassengerDetailsComponent implements OnInit, OnDestroy {

  passengerCountList;
  emailFormControl: FormControl;
  savedSeating: SeatDetail[] = [];
  displayedColumns = ['position', 'name', 'seat', 'charge'];
  titles = ['Mr', 'Mrs', 'Ms', 'Dr', 'Lord', 'Lady', 'Rev', 'Prof', 'Capt', 'Sir'];
  genders = ['Male', 'Female', 'Other'];
  passengerDetails: FormGroup;

  constructor(private fb: FormBuilder,
              public flightBookingService: FlightBookingService,
              private location: Location) {

  }

  ngOnInit() {
    const passengerCountSum = this.flightBookingService.getPassengerCountSum();
    this.passengerCountList = Array(passengerCountSum).fill(0).map((x, i) => i);
    this.savedSeating = savedSeating;

    // building complete form here
    this.passengerDetails = this.fb.group({
      passengerBioFormArray: this.fb.array([]),
      passengerContactDetailsGroup: this.fb.group({
        telephoneNumber: '',
        mobileNumber: '',
        email: ['', [Validators.required, Validators.email]]
      })
    });

    const passengerFormArray = this.passengerDetails.controls['passengerBioFormArray'] as FormArray;
    for (let i = 0; i < passengerCountSum; i++) {
      passengerFormArray.push(this.createPassengerBioFG());
    }
    this.emailFormControl = <FormControl>(<FormGroup>this.passengerDetails.controls['passengerContactDetailsGroup']).controls['email'];
  }

  createPassengerBioFG() {
    return this.fb.group({
      title: '',
      firstName: '',
      middleName: '',
      lastName: '',
      dob: '',
      gender: ''
    });
  }


  ngOnDestroy() {
  }

  log(object: any) {
    console.log(object);
  }


  showMeDetails() {
    console.log(this.passengerDetails.value);
  }

  cancel() {
    this.showMeDetails();
    this.location.back();
  }

}

const savedSeating: SeatDetail[] = [
  {
    passengerName: 'Neeti',
    charge: 150,
    seatNumber: '24F'
  },
  {
    passengerName: 'Harman',
    charge: 100,
    seatNumber: '24E'
  }
];


