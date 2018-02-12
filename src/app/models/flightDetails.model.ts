export interface FlightDetailsResult {
  flightId: string;
  origin: string;
  destination: string;
  originDepartDate: string;
  originDepartTime: string;
  destinationArrivalDate: string;
  destinationArrivalTime: string;
  flightName: string;
  flightNumber: string;
  seatRemain: string;
  pricePerAdult: string;
  pricePerChild: string;
  pricePerInfant: string;
  refundable: boolean;
}

export interface FlightDetailsResponseBody {
  superPnr: string;
  totalPrice: number;
  detailResult: FlightDetailsResult[];
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