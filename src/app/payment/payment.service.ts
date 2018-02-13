import {Injectable, Input} from '@angular/core';
import {CardDetails, PaymentComponentInput, PaymentRequest} from './payment.model';
import {HttpClient} from '@angular/common/http';
import {ApiLinks} from '../shared/api-links';
import {BookingResultService} from '../flight-booking-result/booking-result-service.service';
import {BookingResultServiceResponse} from '../models/flight-booking-result.model';

@Injectable()
export class PaymentService {
  paymentRequest: PaymentComponentInput;
  paymentInitialized = false;

  constructor(private httpClient: HttpClient,
              private flightBookingResultService: BookingResultService) {

  }

  proceedPayment(cardDetails: CardDetails) {

    const paymentRequest: PaymentRequest = {
      customerId: this.paymentRequest.customerId,
      paymentMethod: 'CARD',
      paymentStatus: 'PENDING',
      providerId: this.paymentRequest.providerId,
      superPnr: this.paymentRequest.superPnr,
      cardDetailsDTO: cardDetails
    };

    const url = ApiLinks.addParams(ApiLinks.makePaymentUrl, paymentRequest);

    // call payment making service

    return this.httpClient.get(url);
  }

  reset() {
    this.paymentRequest = null;
    this.paymentInitialized = false;
  }
}
