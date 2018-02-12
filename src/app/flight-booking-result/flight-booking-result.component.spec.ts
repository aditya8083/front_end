import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FlightBookingResultComponent } from './flight-booking-result.component';

describe('FlightBookingResultComponent', () => {
  let component: FlightBookingResultComponent;
  let fixture: ComponentFixture<FlightBookingResultComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FlightBookingResultComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FlightBookingResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
