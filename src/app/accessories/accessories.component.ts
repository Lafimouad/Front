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

}
