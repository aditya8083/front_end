export interface CardDetails {
  cardNumber: string;
  nameOnCard: string;
  expDate: string;
  cvv: string;
  userId: string;
}

export interface PaymentRequest {
  superPnr: string;
  amount?: string;
  providerId: string;
  paymentMethod: string;
  customerId: string;
  paymentStatus: string;
  cardDetailsDTO: CardDetails;
}


export interface PaymentComponentInput {
  superPnr: string;
  amount?: number;
  providerId: string;
  customerId: string;
}

