import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import 'rxjs/add/operator/map';
import {Airport, FlightInfo, PassengerCount, SearchParams, SearchResponse} from './search.flight.model';
import {ApiLinks} from '../shared/api-links';
import {Utils} from '../shared/Utils';
import {FlightDetailsRequest, FlightDetailsResponse} from '../models/flight-details.model';

@Injectable()
export class SearchService {

  searchResultList: FlightInfo[][] = [];
  badStatusCode = false;
  message = '';
  loaded = true;
  passengers: PassengerCount;
  lastSearchParams: SearchParams;


  constructor(private httpClient: HttpClient) {
  }


  searchFor(origin: Airport, destination: Airport, originDate: Date, returnDate: Date, flightType: string) {
    this.loaded = false;
    let url = ApiLinks.searchBase;
    this.badStatusCode = false;
    this.message = 'Loading...';
    this.searchResultList.length = 0; // clear old search results

    const searchParams: SearchParams = {
      origin: origin.code,
      destination: destination.code,
      originDepartDate: Utils.dateToISOString(originDate),
      adults: this.passengers.adult,
      children: this.passengers.child,
      infants: this.passengers.infant,
      flightType: flightType,
      returnDate: Utils.dateToISOString(returnDate)
    };

    this.lastSearchParams = searchParams;

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

  fetchDetails(flight: FlightInfo) {
    const flightDetailsRequest: FlightDetailsRequest = {
      destination: flight.destination,
      originDepartDate: flight.originDepartDate,
      adults: this.passengers.adult,
      children: this.passengers.child,
      infants: this.passengers.infant,
      flightType: 'ONEWAY',
      origin: flight.origin,
      destinationArrivalDate: flight.destinationArrivalDate,
      flightId: flight.flightId,
      doGenerate: false
    };

    const url = ApiLinks.addParams(ApiLinks.flightDetailsBase, flightDetailsRequest);
    return this.httpClient.get<FlightDetailsResponse>(url);
  }


}
