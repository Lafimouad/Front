import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { loadStripe } from '@stripe/stripe-js';
import { environment } from 'src/environments/environment';
import { EventsService } from '../events.service';
import { Donation } from '../shelfstock/Donation';
import { Events } from '../shelfstock/Events';
import { Pool } from '../shelfstock/Pool';
import { TokenStorgeService } from '../token-storage.service';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {

  public events: Events[];
  public editEvent: Events;
  public deleteEvent: Events;
  image_URL:string
  imageFile
////////////////////////////////////////////////////////////////////////
  private roles: string[];
  public authority: string;
  public authoritymanager : boolean = false ;
  public authorityadmin : boolean = false ;
  public authorityclient : boolean = false ;
  public authoritydeliverer : boolean = false ;

  // We load  Stripe
  stripePromise = loadStripe(environment.stripe);

  public pools: Pool[];
  public donations: Donation[];
  info : any ; 
  usernameclient : String;
 
  constructor(private eventsservice: EventsService,private http: HttpClient, private tokenStorage: TokenStorgeService ,private token: TokenStorgeService) { }

  ngOnInit(): void{
    /*this.info = {
      token: this.token.getToken(),
      username: this.token.getUsername(),
      authorities: this.token.getAuthorities()};*/

      if (this.tokenStorage.getToken()) {
        this.roles = this.tokenStorage.getAuthorities();
        this.roles.every(role => {
          if (role === 'ROLE_ADMIN') {
            this.authority = 'admin';
            this.authorityadmin = true;
            return false;
          } else if (role === 'ROLE_CLIENT') {
            this.authority = 'client';
            this.authorityclient = true;
            return false;
          }else if (role === 'ROLE_DELIVERER') {
            this.authority = 'deliverer';
            this.authoritydeliverer = true;
            return false;
          }else if (role === 'ROLE_MANAGER') {
            this.authority = 'manager';
            this.authoritymanager = true;
            return false;
          }
          this.authority = 'user';
          return true;
        }); }
    this.getPool();
    this.getDonation();
    this.getEvents();
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

  public getDonation(): void  {
    this.eventsservice.getDonation().subscribe(
      (response: Donation[] ) => {
        this.donations = response;
        console.log(this.donations); },
        (error: HttpErrorResponse) => {
          alert(error.message);
        } 
        
        ); }
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

public onOpenModal(events: Events,mode: string): void{
  const container = document.getElementById('main-container');
  const button = document.createElement('button')
  button.type='button';
  button.style.display='none';
  button.setAttribute('data-toggle','modal')
  if (mode == 'add') {
    button.setAttribute('data-target','#addShelfModal')
  }  
  if (mode == 'edit') {
    this.editEvent = events;
    button.setAttribute('data-target','#updateShelfModal')
  }  
  if (mode == 'delete') {
    this.deleteEvent = events;
    button.setAttribute('data-target','#deleteShelfModal')
  }  
  container.appendChild(button);
  button.click();   
}
////////////////////////////////////////////////////////////////////

public onAddShelves(addForm: NgForm): void{
  document.getElementById('add-employee-form').click();
  this.eventsservice.addShelfs(addForm.value).subscribe(
    (response: Events) => {
      console.log(response);
      this.getEvents();
      addForm.reset();
      this.eventsservice.addImage(this.imageFile).subscribe();
    },
    (error: HttpErrorResponse) => {
      alert(error.message);
      addForm.reset();

    }
  )  }

  /////////////////////////////////////////////////////

  public getEvents(): void  {
    this.eventsservice.getEvents().subscribe(
      (response: Events[] ) => {
        this.events = response;
        console.log(this.events); },
        (error: HttpErrorResponse) => {
          alert(error.message);
        } 
        
        );

       
    
  }

//////////////////////////////////////////////////////

addImage(event:any){
  this.imageFile = event.target.files[0];
  
  console.log("mayssa");

}
//////////////////////////////////////////////////

public onDeleteShelves(idEvent: number): void{
  this.eventsservice.deleteEvents(idEvent).subscribe(
    (response: void) => {
      console.log(response);
      this.getEvents();
    },
    (error: HttpErrorResponse) => {
      alert(error.message);

    }
  )  }

/////////////////////////////////////////////////////////////////


public onUpdateShelves(events: Events): void{
  this.eventsservice.updateEvents(events).subscribe(
    (response: Events) => {
      console.log(response);
      this.getEvents();
    },
    (error: HttpErrorResponse) => {
      alert(error.message);
    }
  )  }
  
}
