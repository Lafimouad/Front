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


}
