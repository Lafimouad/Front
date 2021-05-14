import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Product } from '../models/product';
import { ShelfService } from '../shelf.service';
import { Shelf } from '../shelfstock/Shelf';
import { TokenStorgeService } from '../token-storage.service';

@Component({
  selector: 'app-food',
  templateUrl: './food.component.html',
  styleUrls: ['./food.component.css']
})
export class FoodComponent implements OnInit {
  private roles: string[];
  public authority: string;
  public authoritymanager : boolean = false ;
  public authorityadmin : boolean = false ;
  public authorityclient : boolean = false ;
  public authoritydeliverer : boolean = false ;
  info : any ; 
  //////////////////////////////////////////////////////////////
   products: Product[];
   public shelfs: Shelf[];
   add1: number = -1;
   add2: number = -1;
   //////////////////////////////////////////
  constructor(private shelfservice: ShelfService,private tokenStorage: TokenStorgeService , private token:TokenStorgeService) { }

  ngOnInit(): void {

    this.info = {
      token: this.token.getToken(),
      username: this.token.getUsername(),
      authorities: this.token.getAuthorities()};

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
   
    this.getFood();
  }
 

 
 public getFood(): void  {
    this.shelfservice.getProductByShelf(1).subscribe(
      (response: Product[] ) => {
        this.products = response;
        console.log(this.products); },
        (error: HttpErrorResponse) => {
          alert(error.message);
        } 
        
        );

  }

  addtoshelf(index: number){
    this.add1 = +index
   }
 
   add(idshelf: number){
     let selectedproduct = this.products[this.add1]
     let data = selectedproduct.id;
     console.log(idshelf);
     console.log(data);
     this.shelfservice.AffectProductToShelf(idshelf,data).subscribe(
       (response: void) => {
         console.log(response);
         this.add1 = -1;
         this.getFood();
       },
       (error: HttpErrorResponse) => {
         alert(error.message);
 
       }
     ) 
 }


 addQ(quantity: number){
  let selectedproduct = this.products[this.add2]
  let data = selectedproduct.id;
  console.log(quantity);
  console.log(data);
  this.shelfservice.addquantity(data,quantity).subscribe(
    (response: void) => {
      console.log(response);
      this.add2 = -1;
      this.getFood();
    },
    (error: HttpErrorResponse) => {
      alert(error.message);

    }
  ) 

} 
Quantity(index){
  this.add2 = +index
 }

resetQ(){
  let selectedproduct = this.products[this.add2]
  let data = selectedproduct.id;
  console.log(data);
  this.shelfservice.resetQuantity(data).subscribe(
    (response: void) => {
      console.log(response);
      this.add2 = -1;
      this.getFood();
    },
    (error: HttpErrorResponse) => {
      alert(error.message); }
  )

 }

 decQuantity(){
  let selectedproduct = this.products[this.add2]
  let data = selectedproduct.id;
  console.log(data);
  this.shelfservice.decrementProductQuantity(data).subscribe((response: void) => {
    console.log(response);
    this.add2 = -1;
    this.getFood();
  },
  (error: HttpErrorResponse) => {
    alert(error.message); })
 }

}
