export interface FlightInfo {
  flightId: string;
  origin: string;
  destination: string;
  originDepartDate: string;
  originDepartTime: string;
  destinationArrivalDate: string;
  destinationArrivalTime: string;
  flightCode: string;
  flightName: string;
  flightNumber: string;
  pricePerAdult: string;
  baggageWeight: string;
  transitVisaRequired: boolean;
  refundable: boolean;
  handBaggageFlight: boolean;
}


export interface SearchData {
  flightResult: FlightInfo[][];
}

export interface SearchResponse {
  resCode: number;
  resMessage: string;
  interactionId: string;
  interactionType: string;
  response: SearchData;
}

export interface SearchParams {
  origin: string;
  destination: string;
  originDepartDate: string;
  returnDate: string;
  adults: number;
  children: number;
  infants: number;
  flightType: string;
}

export interface PassengerCount {
  adult: number;
  child: number;
  infant: number;
}


