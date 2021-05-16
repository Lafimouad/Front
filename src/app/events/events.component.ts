import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { loadStripe } from '@stripe/stripe-js';
import { environment } from 'src/environments/environment';
import { EventsService } from '../events.service';
import { Pool } from '../shelfstock/Pool';
import { TokenStorgeService } from '../token-storage.service';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {

  // We load  Stripe
  stripePromise = loadStripe(environment.stripe);

  public pools: Pool[];
  info : any ; 
  usernameclient : String;
 
  constructor(private eventsservice: EventsService,private http: HttpClient, private tokenStorage: TokenStorgeService ,private token: TokenStorgeService) { }

  ngOnInit(): void{
    this.getPool();
  } 

  public getPool(): void  {
    this.eventsservice.getPool().subscribe(
      (response: Pool[] ) => {
        this.pools = response;
        console.log(this.pools); },
        (error: HttpErrorResponse) => {
          alert(error.message);
        } 
        
        );

        this.info = {
          token: this.token.getToken(),
          username: this.token.getUsername(),
          authorities: this.token.getAuthorities()
        };

        this.usernameclient=this.info.username;

      
    
  }

  async pay(): Promise<void> {
    // here we create a payment object
    const payment = {
      name: 'Your Donation',
      //name: 'Iphone',
      currency: 'usd',
      // amount on cents *10 => to be on dollar
      amount: 100,
      quantity: '1',
      cancelUrl: 'http://localhost:4200/cancel',
      successUrl: 'http://localhost:4200/success',
      username: this.usernameclient,
      
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
  
  
}
