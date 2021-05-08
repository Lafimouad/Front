import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Product } from '../models/product';
import { ShelfService } from '../shelf.service';
import { Shelf } from '../shelfstock/Shelf';

@Component({
  selector: 'app-clothes',
  templateUrl: './clothes.component.html',
  styleUrls: ['./clothes.component.css']
})
export class ClothesComponent implements OnInit {
  products: Product[];
   public shelfs: Shelf[];
   public idshelf: number = 1;

   add1: number = -1;

  constructor(private shelfservice: ShelfService) { }

  ngOnInit(): void {
    this.getClothes();
  }

  public getClothes(): void  {
    this.shelfservice.getProductByShelf(2).subscribe(
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
        this.getClothes();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);

      }
    ) 





  }

}
