import {Component, OnDestroy, OnInit} from '@angular/core';
import {SearchService} from '../search.service';
import {FormBuilder, FormControl, FormGroup} from '@angular/forms';
import {Observable} from 'rxjs/Observable';
import {Subscription} from 'rxjs/Subscription';
import {DomSanitizer} from '@angular/platform-browser';
import {MatIconRegistry, MatSnackBar} from '@angular/material';
import {Airport} from '../search.flight.model';

// import {startWith} from 'rxjs/Operator/startWith';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.material.html',
  styleUrls: ['./search-bar.component.material.css']
})
export class SearchBarComponent implements OnInit, OnDestroy {


  returnChecked = false;
  searchForm: FormGroup;
  stationList: Airport[] = [
    {name: 'Bengaluru', code: 'BLR'},
    {name: 'Delhi', code: 'DEL'},
    {name: 'Mumbai', code: 'BOM'},
    {name: 'Jakarta', code: 'JKT'},
    {name: 'Bali', code: 'DPS'}
  ];
  filteredOriginList: Observable<Airport[]>;
  filteredDestinationList: Observable<Airport[]>;
  flightType: FormControl = new FormControl();

  oneway: FormControl = new FormControl();

  /*passengers*/
  passengerAdultCount = 1;
  passengerChildCount = 0;
  passengerInfantCount = 0;
  passengerCountSubscription: Subscription;

  constructor(private searchService: SearchService, private fb: FormBuilder,
              iconRegistry: MatIconRegistry, sanitizer: DomSanitizer,
              private snackBar: MatSnackBar) {
    this.createForm();
    // temporary values
    this.searchForm.controls.origin.setValue(this.stationList[3]);
    this.searchForm.controls.destination.setValue(this.stationList[4]);
    this.flightType.setValue('ONEWAY');

    // register icon
    iconRegistry.addSvgIcon(
      'arrow-drop-down',
      sanitizer.bypassSecurityTrustResourceUrl('assets/ic_arrow_drop_down_black_24px.svg'));
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

  filter(val: string): Airport[] {
    return this.stationList.filter(option =>
      option.name.toLowerCase().includes(val.toLowerCase()) || option.code.toLowerCase().includes(val.toLowerCase()));
  }

  ngOnInit() {
    this.filteredOriginList = this.searchForm.controls.origin.valueChanges
      .map(value => typeof value === 'string' ? value : value.name)
      .map(name => name ? this.filter(name) : this.stationList.slice());
    this.filteredDestinationList = this.searchForm.controls.destination.valueChanges
      .map(value => typeof value === 'string' ? value : value.name)
      .map(name => name ? this.filter(name) : this.stationList.slice());


    // load last state of component
    if (this.searchService.passengers) {
      this.passengerAdultCount = this.searchService.passengers.adult;
      this.passengerChildCount = this.searchService.passengers.child;
      this.passengerInfantCount = this.searchService.passengers.infant;
      this.searchForm.controls['origin'].setValue(this.searchService.lastSearchParams.origin);
      this.searchForm.controls['destination'].setValue(this.searchService.lastSearchParams.destination);
      this.searchForm.controls['originDate'].setValue(this.searchService.lastSearchParams.originDepartDate);
      this.searchForm.controls['returnDate'].setValue(this.searchService.lastSearchParams.returnDate);
    }

  }

  onSearchClicked(originDate: any, returnDate: any) {
    const origin = this.searchForm.get('origin').value;
    const destination = this.searchForm.get('destination').value;

    if (origin.code === undefined || destination.code === undefined) {
      this.snackBar.open('Please select a valid origin / destination from list.', 'Will do sir', {
        duration: 5000
      });
      return;
    }

    console.log('date value is: ' + this.searchForm.controls.originDate.value);
    originDate = new Date(Date.parse(originDate));
    returnDate = new Date(Date.parse(returnDate));
    console.log(originDate.toLocaleDateString());
    console.log('flight type is : ' + this.flightType.value);
    // set passenger information on search service so it could be transferred to booking service when needed.
    this.searchService.passengers = {adult: this.passengerAdultCount, child: this.passengerChildCount, infant: this.passengerInfantCount};

    // call api from search service
    this.searchService.searchFor(origin, destination, originDate, returnDate, this.flightType.value);
    console.log('Searching for flights from ' + origin.name + ' to ' + destination.name);
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

  displayFunction(airport: Airport) {
    return airport.name + ' (' + airport.code + ')';
  }

  ngOnDestroy() {
    if (this.passengerCountSubscription) {
      this.passengerCountSubscription.unsubscribe();
    }
  }
}
