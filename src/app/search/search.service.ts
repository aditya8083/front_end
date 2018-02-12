import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import 'rxjs/add/operator/map';
import {FlightInfo, PassengerCount, SearchParams, SearchResponse} from './search.flight.model';
import {ApiLinks} from '../shared/api-links';
import {Utils} from '../shared/Utils';

@Injectable()
export class SearchService {

  searchResultList: FlightInfo[][] = [];
  badStatusCode = false;
  message = '';
  loaded = true;
  passengers: PassengerCount;

  constructor(private httpClient: HttpClient) {
  }


  searchFor(origin: string, destination: string, originDate: Date, returnDate: Date, flightType: string) {
    this.loaded = false;
    let url = ApiLinks.searchBase;
    this.badStatusCode = false;
    this.message = 'Loading...';
    this.searchResultList.length = 0; // clear old search results

    const searchParams: SearchParams = {
      origin: origin,
      destination: destination,
      originDepartDate: Utils.dateToISOString(originDate),
      adults: this.passengers.adult,
      children: this.passengers.child,
      infants: this.passengers.infant,
      flightType: flightType,
      returnDate: Utils.dateToISOString(returnDate)
    };

    url = ApiLinks.addParams(url, searchParams);
    console.log('sending request to : ' + url);
    this.httpClient.get<SearchResponse>(url).subscribe(
      data => {
        this.loaded = true;
        if (data.resCode !== 200) {
          this.badStatusCode = true;
          this.message = data.resMessage;
        } else {
          this.searchResultList = data.response.flightResult;
        }
      },
      error2 => {
        this.badStatusCode = true;
        this.loaded = true;
        this.message = 'Can\'t connect to search Micro Service.';
      });

  }


}
