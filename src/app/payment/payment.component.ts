import {Component, Input, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {

  @Input('paymentRequest') paymentRequest: PaymentRequest;
  paymentInitialized = false;

  constructor(private router: Router) {
  }

  ngOnInit() {
    if (this.paymentRequest == null) {
      console.log('Unable to initialize payments');
    } else {
      this.paymentInitialized = true;
    }
  }


}
