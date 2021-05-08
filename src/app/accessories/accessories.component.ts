import { Component, OnInit } from '@angular/core';
import { Product } from '../models/product';
import { Shelf } from '../shelfstock/Shelf';
import { ShelfService } from '../shelf.service';
import { HttpErrorResponse } from '@angular/common/http';


@Component({
  selector: 'app-accessories',
  templateUrl: './accessories.component.html',
  styleUrls: ['./accessories.component.css']
})
export class AccessoriesComponent implements OnInit {
  products: Product[];
   public shelfs: Shelf[];
   add1: number = -1;


  constructor(private shelfservice: ShelfService) { }

  ngOnInit(): void {

    this.getFood();
  }

  public getFood(): void  {
    this.shelfservice.getProductByShelf(3).subscribe(
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

}
