import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ApiLinks} from '../shared/api-links';

@Injectable()
export class FlightBookingHistoryService {

  email: string;
  superPnr: string;

  constructor(private httpClient: HttpClient) {
    // testing
    this.superPnr = 'randomPnr';
  }


  fetchBookingDetailsByEmail() {

  }


  fetchBookingDetailsByPnr(superPnr: string) {
    // create request here
    return this.httpClient.get(ApiLinks.bookingHistoryBaseUrl + '/' + superPnr);
  }
}
