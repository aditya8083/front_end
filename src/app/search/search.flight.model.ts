export interface OneWay {
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

export interface RoundWay {
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
  oneWay: OneWay[];
  roundWay: RoundWay[];
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
  destinationArrivalDate: string;
  adults: number;
  children: number;
  infants: number;
  flightType: string;
}

export interface PassengerCount{
  adult: number;
  child: number;
  infant: number;
}


