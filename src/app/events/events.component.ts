import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { loadStripe } from '@stripe/stripe-js';
import { environment } from 'src/environments/environment';
import { User } from '../auth/user';
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
  add2: number = -1;
  add1: number = -1;
  add3: number = -1;
  alert: boolean = false;
  alert1: boolean = false;
  
  


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
  public users: User[];
  public donations: Donation[];
  info : any ; 
  usernameclient : String;
  idClient: number;
 
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
    this.DeleteEventsAfterYear();
    this.getlistP();
    
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
  if (mode == 'list') {
    /*this.users = events;*/
   /* this.getlistP;*/
    button.setAttribute('data-target','#displaylist')
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
      console.log("testtest",response);
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

  ///////////////////////////////////////////////////
  DeleteEventsAfterYear():void{
    this.eventsservice.DeleteAllEventsAfterYear().subscribe(
      (response: void) => {
        console.log(response);
       
        this.getEvents();}
    )
  }

///////////////////////////////////////////////////

public searchShelfs(key : string): void{
  const results: Events[] = [];
  for (const shelf of this.events){
    if (shelf.eventName.toLowerCase().indexOf(key.toLowerCase()) !== -1 
    || shelf.description.toLowerCase().indexOf(key.toLowerCase()) !== -1 ) {
      results.push(shelf);
    }
  } 
  this.events = results;
  if (results.length == 0 || !key ){
    this.getEvents();
  }
}

///////////////////////////////////////////
Quantity(index){
  this.add2 = +index
  this.AffectClientToEvent();
 }

 Quantity1(index){
  this.add1 = +index
  this.ReloveClientfromEvent();
 }

 
 

/* NumberP(): void {
   let selectedproduct = this.eventsservice[this.add3]
   let data = selectedproduct.idEvent;
   console.log(data);
   this.eventsservice.NombreP(data).subscribe(

    (response: number) => {
      console.log(response);
      this.add3 = -1;
      this.getEvents();
      this.numberP = response;

    },
    (error: HttpErrorResponse) => {
      alert(error.message); }

   )
 }*/


AffectClientToEvent(): void {
 
  let selectedproduct = this.events[this.add2]
  let data = selectedproduct.idEvent;
  console.log(data);
  this.eventsservice.AddEventToClient(7,data).subscribe(
    (response: void) => {
      console.log(response);
      this.add2 = -1;
      this.getEvents();
      this.alert=true;

    },
    (error: HttpErrorResponse) => {
      alert(error.message); });
 
}  

CloseAlert(){
  this.alert=false;
}

CloseAlert1(){
  this.alert1=false;
}

ReloveClientfromEvent(): void {
 
  let selectedproduct = this.events[this.add1]
  let data = selectedproduct.idEvent;
  console.log(data);
  this.eventsservice.removeFromEvent(7,data).subscribe(
    (response: void) => {
      console.log(response);
      this.add1 = -1;
      this.getEvents();
      this.alert1=true;
    },
    (error: HttpErrorResponse) => {
      alert(error.message); });
 
} 


Quantity3(index){
  this.add3 = +index
  this.getlistP();
 }

public getlistP(): void  {
  let selectedproduct = this.events[this.add3]
  let data = selectedproduct.idEvent;
  console.log(data);
  this.eventsservice.ListP(data).subscribe(
    (response: User[] ) => {
      this.users = response;
      console.log(this.users); },
      (error: HttpErrorResponse) => {
        alert(error.message);
      } 
      
      );

      /*this.info = {
        token: this.token.getToken(),
        username: this.token.getUsername(),
        authorities: this.token.getAuthorities()

        
        
      };

      this.usernameclient=this.info.username;*/

    
  
}

}
