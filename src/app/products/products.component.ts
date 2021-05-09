import { Component, OnInit, Input, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Product } from '../models/product';
import { ProductService } from '../MouadhServices/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {


  constructor(private productservice:ProductService,private modalService: NgbModal,private fb: FormBuilder) { }
  ListProducts:Product[];
  product:Product=new Product();
  productUpdated:Product=new Product();
  editProfileForm:FormGroup;
  title = 'modal2';
  fproduct :Product= new Product();
  hid:boolean=true;

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
  
    
    
  
    this.productservice.getProductList().subscribe(res=>{console.log(res);

      this.ListProducts=res.products
      console.log("prod",this.ListProducts);})


  }
 

// delete product  
  delProd(id:number){
    this.productservice.deleteProduct(id).subscribe(data=>console.log(data))

  }
  //search
  searchProduct(key:string):void{
    const result : Product[]=[];
    for(const Product of this.ListProducts){
      if(Product.name.toLocaleLowerCase().indexOf(key.toLocaleLowerCase())!== -1){
        result.push(Product);
      }
    }
    this.ListProducts=result;
    if(result.length==0|| !key){
      this.productservice.getProductList().subscribe(res=>{console.log(res);

        this.ListProducts=res.products
        console.log("prod",this.ListProducts);})

    }
  }
  //update 1.2
  doEdit(p:Product){
      this.fproduct=p;
      this.hid=false;

  }
  public updateProduct(id:number){
    console.log("ccccc",id);
    this.productUpdated=new Product(); 
    this.productUpdated.name=this.name;
    this.productUpdated.id=id;
    this.productUpdated.description=this.description;
    this.productUpdated.price=this.price;
    this.productUpdated.category=this.category;
    this.productUpdated.weight=this.weight;
    this.edit();
     }

    

  


  // update zone 
  addCodeBare($event:any){
    this.bareCodeFile= $event.target.files[0];
    console.log("mouadh");
  }

  addImage(event:any){
    this.imageFile = event.target.files[0];
    
    console.log("lafi");
  }
  editproduct(){
    this.productUpdated=new Product(); 
    this.product.name=this.name;
    this.product.description=this.description;
    this.product.price=this.price;
    this.product.weight=this.weight;
    this.edit();
    
  }
  edit() {
    this.productservice.updateProduct(this.productUpdated)
      .subscribe(data => {
        this.productservice.addImage(this.imageFile).subscribe();
        this.productservice.addBareCode(this.bareCodeFile).subscribe(data =>console.log(data));
       }
       )
  }
  
  

  //update end here

  sort(event: any) {
    switch (event.target.value) {
      case "Low":
        {
          this.ListProducts = this.ListProducts.sort((low, high) => low.price - high.price);
          break;
        }

      case "High":
        {
          this.ListProducts = this.ListProducts.sort((low, high) => high.price - low.price);
          break;
        }

      default: {
        this.ListProducts = this.ListProducts.sort((low, high) => low.price - high.price);
        break;
      }

    }
    return this.ListProducts;

  }

}
