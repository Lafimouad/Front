import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { loadStripe } from '@stripe/stripe-js';
import { environment } from 'src/environments/environment';
 


@Component({
  selector: 'app-donations',
  templateUrl: './donations.component.html',
  styleUrls: ['./donations.component.css'],
  
})


export class DonationsComponent implements OnInit {

  
  // We load  Stripe
  stripePromise = loadStripe(environment.stripe);
  ////////////////////

  /*@ViewChild('cardInfo') cardInfo: ElementRef;
  _totalAmount: number;
      card: any;
      cardHandler = this.onChange.bind(this);
      cardError: string;*/
  /////////////////////////

 
  
  constructor(private http: HttpClient) { }
  

  ngOnInit(){ } 

  async pay(): Promise<void> {
    // here we create a payment object
    const payment = {
      //name: 'Iphone',
      currency: 'usd',
      // amount on cents *10 => to be on dollar
      amount: 99900,
      //quantity: '1',
      cancelUrl: 'http://localhost:4202/cancel',
      successUrl: 'http://localhost:4202/success',
    };

    const stripe = await this.stripePromise;

    // this is a normal http calls for a backend api
    this.http
      .post("http://localhost:8081/apidonate/donation", payment)
      .subscribe((data: any) => {
        // I use stripe to redirect To Checkout page of Stripe platform
        stripe.redirectToCheckout({
          sessionId: data.id,
        });
      });
  }

  /////////////////////////////

 
 
}
