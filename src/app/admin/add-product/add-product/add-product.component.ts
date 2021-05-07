import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/MouadhServices/products.service';
@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css'],
})
export class AddProductComponent implements OnInit {

  constructor(private productservice:ProductService) { }
  product:Product=new Product();
  submitted = false;
    id
    name
    description
    price
    weight
    image_URL
    category
    quantityProduct
    imagePath
  ngOnInit() {
    this.submitted=false;

  }

  saveProduct(){
    this.product=new Product(); 
    this.product.name=this.name;
    this.product.description=this.description;
    this.product.price=this.price;
    this.product.image_URL=this.image_URL;
    this.product.category=this.category;
    this.product.weight=this.weight;
    this.product.imagePath=this.imagePath;
    this.submitted = true;
    this.save();
  }
  save() {
    this.productservice.createProduct(this.product)
      .subscribe(data => console.log(data), error => console.log(error));
    this.product = new Product();
  }

  addProductForm(){
    this.submitted=!this.submitted;

  }

}
