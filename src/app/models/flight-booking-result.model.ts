export interface Passenger {
  name: string;
  age: string;
}

export interface BookingResultServiceResponse {
  id: string;
  userId: string;
  superPnr: string;
  bookingType: string;
  bookingSource: string;
  bookingStatus: string;
  amount: number;
  paymentId: string;
  paymentStatus: string;
  phoneNumber: string;
  bookingEmail: string;
  passengers: Passenger[];
}
