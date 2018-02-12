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
  passengerDetailsFormGroup: FormGroup;


  constructor(private fb: FormBuilder,
              public flightBookingService: FlightBookingService,
              private location: Location) {
  }

  ngOnInit() {
    this.passengerCountList = this.flightBookingService.getPassengerCountList();
    this.savedSeating = savedSeating;

    // building complete form here
    this.passengerDetailsFormGroup = this.fb.group({
      passengerBioFormArray: this.fb.array([]),
      passengerContactDetailsGroup: this.fb.group({
        telephoneNumber: '',
        mobileNumber: '',
        email: ['', [Validators.required, Validators.email]]
      })
    });
    // adding passenger detail forms in FA
    const passengerFormArray = this.passengerDetailsFormGroup.controls['passengerBioFormArray'] as FormArray;
    for (let i = 0; i < this.passengerCountList.length; i++) {
      passengerFormArray.push(this.createPassengerBioFG());
    }
    // need this reference for validation messages
    this.emailFormControl = <FormControl>(<FormGroup>this.passengerDetailsFormGroup.controls['passengerContactDetailsGroup']).controls['email'];

    // set form reference in service
    this.flightBookingService.passengerDetailsFormGroup = this.passengerDetailsFormGroup;

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
    console.log(this.passengerDetailsFormGroup.value);
  }

  cancel() {
    this.showMeDetails();
    this.location.back();
  }

  next() {
    this.showMeDetails();
    console.log(this.passengerDetailsFormGroup.status);
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


