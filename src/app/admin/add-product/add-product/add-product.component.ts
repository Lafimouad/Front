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
  showAdd = false;
    id
    name
    description
    price
    weight
    image_URL:string
    category
    quantityProduct
    imagePath
    event
    imageFile
    bareCodeFile
  ngOnInit() {
    this.submitted=false;

  }

  saveProduct(){
    this.product=new Product(); 
    this.product.name=this.name;
    this.product.description=this.description;
    this.product.price=this.price;
    this.product.category=this.category;
    this.product.weight=this.weight;
    console.log("cefff",this.product.id)
    this.submitted = true;
    this.save();
    
  }
  save() {
    this.productservice.createProduct(this.product)
      .subscribe(data => {
        this.productservice.addImage(this.imageFile).subscribe();
        this.productservice.addBareCode(this.bareCodeFile).subscribe(data =>console.log(data));
       }
       )
  }

  addProductForm(){
    this.submitted=!this.submitted;

  }

  
  addCodeBare($event:any){
    this.bareCodeFile= $event.target.files[0];
    console.log("mouadh");
  }

  addImage(event:any){
    this.imageFile = event.target.files[0];
    
    console.log("lafi");
  }

  show() {
    this.showAdd = true;
  }
  hide() {
    this.showAdd = false;
  }
  refresh(): void {
    window.location.reload();
}

}
