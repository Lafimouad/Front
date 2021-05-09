import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Product } from '../models/product';
import { ShelfService } from '../shelf.service';
import { Shelf } from '../shelfstock/Shelf';

@Component({
  selector: 'app-food',
  templateUrl: './food.component.html',
  styleUrls: ['./food.component.css']
})
export class FoodComponent implements OnInit {
   products: Product[];
   public shelfs: Shelf[];
   add1: number = -1;
   add2: number = -1;
  constructor(private shelfservice: ShelfService) { }

  ngOnInit(): void {

   /* this.shelfservice.getShelfs().subscribe(
      (response: Shelf[] ) => {
        this.shelfs = response; });

        console.log(this.shelfs)
       
        for (const shelf of this.shelfs)
          { 
            if (shelf.typeShelf.toLowerCase() === "food"){
            
              this.idshelf = shelf.idShelf ; 
            }
            }*/
   
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
}
