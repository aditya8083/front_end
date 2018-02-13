import {Component, OnDestroy, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {PaymentService} from './payment.service';
import {Subscription} from 'rxjs/Subscription';
import {BookingResultServiceResponse} from '../models/flight-booking-result.model';
import {BookingResultService} from '../flight-booking-result/booking-result-service.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {CardDetails} from './payment.model';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit, OnDestroy {


  paymentResponseSubscription: Subscription;
  cardInformationForm: FormGroup;

  constructor(private router: Router,
              protected paymentService: PaymentService,
              protected flightBookingResultService: BookingResultService,
              protected fb: FormBuilder) {
  }

  ngOnInit() {
    this.cardInformationForm = this.fb.group({
      cardNumber: ['', Validators.required],
      expiryMonth: ['', Validators.required],
      expiryYear: ['', Validators.required],
      cvv: ['', Validators.required],
      name: ''
    });
  }


  validateForm() {
    if (this.cardInformationForm.controls['expiryMonth'].value > 12) {
      this.cardInformationForm.set
    }
  }

  validateFormAndProceedPayment() {
    if (this.cardInformationForm.status === 'INVALID') {
      return;
    }

    const cardDetails: CardDetails = {
      userId: 'Ajay',
      nameOnCard: this.cardInformationForm.value['name'],
      expDate: this.cardInformationForm.value['expiryYear'] + '-' + this.cardInformationForm.value['expiryMonth'],
      cvv: this.cardInformationForm.controls['cvv'].value,
      cardNumber: this.cardInformationForm.controls['cardNumber'].value
    };
    // reroute when response is received from payment gateway
    this.paymentResponseSubscription = this.paymentService.proceedPayment(cardDetails).subscribe(
      data => {
        this.flightBookingResultService.bookingResultResponse = <BookingResultServiceResponse> data;
        console.log( " this.flightBookingResultService.bookingResultResponse " + this.flightBookingResultService.bookingResultResponse );
        this.router.navigate(['confirmed/flight']);
      });
  }

  cancel() {
    this.router.navigate(['']);
  }

  ngOnDestroy() {
    if (this.paymentResponseSubscription) {
      this.paymentResponseSubscription.unsubscribe();
    }
  }
}
