import {FlightDetailsInfo} from './flight-details.model';

export interface ContactDetails {
  email: string;
  mobileNumber: string;
}

export interface Passenger {
  id: string;
  name: string;
  age: string;
}

export interface BookingDetails {
  id: string;
  userId: string;
  superPnr: string;
  bookingStatus: string;
  paymentId: string;
  amount: number;
  paymentStatus: string;
  bookingType: string;
  bookingSource: string;
  phoneNumber: string;
  bookingEmail: string;
  passengers: Passenger[];
}


export interface FlightBookingDetailsResponse {
  bookingDetails: BookingDetails;
  flightDetailsResponseDTOS: FlightDetailsInfo[];
}
