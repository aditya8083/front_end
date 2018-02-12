import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ApiLinks} from '../shared/api-links';
import {Utils} from '../shared/Utils';

@Injectable()
export class BookingResultServiceService {

  badStatusCode = false;
  message = '';
  loaded = true;

  constructor(private httpClient: HttpClient) {
  }

}
