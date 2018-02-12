import {Component, OnDestroy, OnInit} from '@angular/core';
import {SearchService} from '../search.service';
import {FormBuilder, FormControl, FormGroup} from '@angular/forms';
import {Observable} from 'rxjs/Observable';
import {Subscription} from 'rxjs/Subscription';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.material.html',
  styleUrls: ['./search-bar.component.material.css']
})
export class SearchBarComponent implements OnInit, OnDestroy {


  returnChecked = false;
  searchForm: FormGroup;
  stationList = ['DEL', 'BLR', 'HLD', 'AUS', 'DDN'];
  filteredOriginList: Observable<string[]>;
  filteredDestinationList: Observable<string[]>;
  flightType: FormControl = new FormControl();

  oneway: FormControl = new FormControl();

  /*passengers*/
  passengerAdultCount = 1;
  passengerChildCount = 0;
  passengerInfantCount = 0;
  passengerCountSubscription: Subscription;

  constructor(private searchService: SearchService, private fb: FormBuilder) {
    this.createForm();
    this.searchForm.controls.origin.setValue('BLR');
    this.searchForm.controls.destination.setValue('DEL');
    this.flightType.setValue('ONEWAY');
  }


  createForm() {
    this.searchForm = this.fb.group({
      origin: '',
      destination: '',
      originDate: '',
      returnDate: {value: '', disabled: !this.returnChecked},
      passengerTotal: ''
    });

  }

  filter(val: string): string[] {
    return this.stationList.filter(option =>
      option.toLowerCase().indexOf(val.toLowerCase()) === 0);
  }

  ngOnInit() {
    this.filteredOriginList = this.searchForm.controls.origin.valueChanges
      .map(val => this.filter(val));
    this.filteredDestinationList = this.searchForm.controls.destination.valueChanges
      .map(val => this.filter(val));
  }

  onSearchClicked(originDate: any, returnDate: any) {
    const origin = this.searchForm.get('origin').value;
    const destination = this.searchForm.get('destination').value;
    console.log('date value is: ' + this.searchForm.controls.originDate.value);
    originDate = new Date(Date.parse(originDate));
    returnDate = new Date(Date.parse(returnDate));
    console.log(originDate.toLocaleDateString());
    console.log('flight type is : ' + this.flightType.value);
    // set passenger information on search service so it could be transferred to booking service when needed.
    this.searchService.passengers = {adult: this.passengerAdultCount, child: this.passengerChildCount, infant: this.passengerInfantCount};

    // call api from search service
    this.searchService.searchFor(origin, destination, originDate, returnDate, this.flightType.value);
    console.log('Searching for flights from ' + origin + ' to ' + destination);
  }


  currentDateString(): string {
    return new Date().toISOString().slice(0, 10);
  }

  decrementCount(count: number, minValue: number) {
    return Math.max(count - 1, minValue);
  }


  onReturnCheckboxChanged() {
    this.returnChecked = !this.returnChecked;
    if (this.returnChecked) {
      this.searchForm.controls['returnDate'].enable();
    } else {
      this.searchForm.controls['returnDate'].disable();
    }
  }

  ngOnDestroy() {
    // this.passengerCountSubscription.unsubscribe();
  }
}