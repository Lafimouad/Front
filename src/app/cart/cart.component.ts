import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { loadStripe } from '@stripe/stripe-js';
import { environment } from 'src/environments/environment';
import { Order } from '../models/order';
import { Product } from '../models/product';
import { OrderService } from '../MouadhServices/order.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
// We load  Stripe
stripePromise = loadStripe(environment.stripe);
  constructor(private orderservice:OrderService,private http :HttpClient) { }
  order:Order=new Order();
  ListProducts:Product[];
  OrderUpdated:Order=new Order();
  ngOnInit(): void {
    this.orderservice.getProductList(2).subscribe(
      res=>{
        this.ListProducts=res.products;
        this.order.products=res;
        
      }

    )

    }

    removeFromCart(product:Product) { 

      let List: Product[] =[];
  
      List.push(product);
      console.log("1",product);
      console.log("2",List);
      console.log("3",this.OrderUpdated);
      this.orderservice.deleteProductfromCart(List,1).subscribe(data=>console.log("kgkgk",data));
      console.log("4",this.order);
     }

     async pay(): Promise<void> {
      // here we create a payment object
      const payment = {
        name: 'Your Order',
        currency: 'EUR',
        // amount on cents *10 => to be on dollar
        amount: 800,
        quantity: "10",
        cancelUrl: 'http://localhost:4200/cancel',
        successUrl: 'http://localhost:4200/success',
        email:"mouad19971@gmail.com",
      };
    
      const stripe = await this.stripePromise;
    
      // this is a normal http calls for a backend api
      this.http
        .post("http://localhost:8081/api/payment", payment)
        .subscribe((data: any) => {
          console.log("what data ",data)
          // I use stripe to redirect To Checkout page of Stripe platform
          stripe.redirectToCheckout({
            sessionId: data.id,
          });
        });
    }
    }

  
