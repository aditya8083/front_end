export interface FlightDetailsInfo {
  flightId: string;
  origin: string;
  destination: string;
  isRefundable: boolean;
  originDepartDate: string;
  originDepartTime: string;
  destinationArrivalDate: string;
  destinationArrivalTime: string;
  flightCode: string;
  flightName: string;
  flightNumber: string;
  seatRemain: number;
  pricePerAdult: number;
  pricePerChild: number;
  pricePerInfant: number;
  originAirportName: string;
  originTerminal: string;
  destinationAirportName: string;
  destinationTerminal: string;
  isHandBaggageFlight: boolean;
  baggageWeight: number;
  transitVisaRequired: boolean;
}




export interface FlightDetailsResponseBody {
  superPnr: string;
  totalPrice: number;
  detailResult: FlightDetailsInfo[];
}

export interface FlightDetailsResponse {
  resCode: number;
  resMessage: string;
  interactionId: string;
  interactionType: string;
  response: FlightDetailsResponseBody;
}

export interface FlightDetailsRequest {
  flightId: string;
  origin: string;
  destination: string;
  originDepartDate: string;
  adults: number;
  children: number;
  infants: number;
  destinationArrivalDate: string;
  flightType: string;
  doGenerate: boolean;
}


export interface Passenger {
  name: string;
  age: string;
}

export interface PartialBookingRequest {
  userId: string;
  amount: number;
  superPnr: string;
  bookingStatus: string;
  paymentId?: any;
  paymentStatus: string;
  bookingType: string;
  bookingSource: string;
  phoneNumber: string;
  bookingEmail: string;
  passengers: Passenger[];
}
