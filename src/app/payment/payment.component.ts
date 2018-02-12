import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {PaymentService} from './payment.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {


  constructor(private router: Router,
              protected paymentService: PaymentService) {
  }

  ngOnInit() {

  }

  proceedPayment() {

  }
}
