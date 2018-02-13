import {Injectable, Input} from '@angular/core';
import {CardDetails, PaymentComponentInput, PaymentRequest} from './payment.model';
import {HttpClient} from '@angular/common/http';
import {ApiLinks} from '../shared/api-links';
import {BookingResultService} from '../flight-booking-result/booking-result-service.service';
import {BookingResultServiceResponse} from '../models/flight-booking-result.model';

@Injectable()
export class PaymentService {
  paymentComponentInput: PaymentComponentInput;
  paymentInitialized = false;

  constructor(private httpClient: HttpClient,
              private flightBookingResultService: BookingResultService) {

  }

  proceedPayment(cardDetails: CardDetails) {

    const paymentRequest: PaymentRequest = {
      customerId: this.paymentComponentInput.customerId,
      paymentMethod: 'CARD',
      paymentStatus: 'PENDING',
      providerId: this.paymentComponentInput.providerId,
      superPnr: this.paymentComponentInput.superPnr,
      cardDetailsDTO: cardDetails
    };

    // const url = ApiLinks.addParams(ApiLinks.makePaymentUrl, paymentComponentInput);

    // call payment making service

    return this.httpClient.post(ApiLinks.makePaymentUrl, paymentRequest);
  }

  reset() {
    this.paymentComponentInput = null;
    this.paymentInitialized = false;
  }
}
