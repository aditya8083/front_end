import {Injectable, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ApiLinks} from '../shared/api-links';
import {Utils} from '../shared/Utils';
import {BookingResultServiceResponse} from '../models/flight-booking-result.model';

@Injectable()
export class BookingResultService implements OnInit {

  badStatusCode = false;
  message = '';
  loaded = true;
  bookingResultResponse: BookingResultServiceResponse;

  constructor(private httpClient: HttpClient) {
  }

  ngOnInit () {

  }

}
