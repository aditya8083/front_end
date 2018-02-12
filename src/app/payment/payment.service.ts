import {Injectable, Input} from '@angular/core';
import {PaymentComponentInput, PaymentRequest} from './payment.model';
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

  proceedPayment() {

    const paymentRequest: PaymentRequest = {
      customerId: this.paymentRequest.customerId,
      paymentMethod: 'CARD',
      paymentStatus: 'PENDING',
      providerId: this.paymentRequest.providerId,
      superPnr: this.paymentRequest.superPnr,
      cardDetailsDTO: {
        cardNumber: '123',
        cvv: '123',
        expDate: '2020-12-02',
        nameOnCard: 'Ajay',
        userId: this.paymentRequest.customerId
      }
    };

    const url = ApiLinks.addParams(ApiLinks.makePaymentUrl, this.paymentRequest);

    this.httpClient.get(url).
      subscribe(
        data => {
          this.flightBookingResultService.bookingResultResponse = <BookingResultServiceResponse>data;
        }
    );
  }
}
