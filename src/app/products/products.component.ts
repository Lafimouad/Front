import { Component, OnInit, Input, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { Product } from '../models/product';
import { ProductService } from '../MouadhServices/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  @Input() public product;

  @Output() productAddToCart: EventEmitter<Product> = new EventEmitter<Product>();
  constructor(private productservice:ProductService) { }
  ListProducts:Product[];
  ngOnInit() {

    this.productservice.getProductList().subscribe(res=>{console.log(res);

      this.ListProducts=res.products
      console.log("prod",this.ListProducts);})
      

  }

  addToCart() {
    this.productAddToCart.emit(this.product);
  }

}
