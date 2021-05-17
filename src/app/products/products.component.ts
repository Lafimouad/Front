import { Component, OnInit, Input, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Order } from '../models/order';
import { Product } from '../models/product';
import { OrderService } from '../MouadhServices/order.service';
import { ProductService } from '../MouadhServices/products.service';
import { TokenStorgeService } from '../token-storage.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  private roles: string[];
  public authority: string;
  public authoritymanager : boolean = false ;
  public authorityadmin : boolean = false ;
  public authorityclient : boolean = false ;
  public authoritydeliverer : boolean = false ;
  
    info : any ; 

  constructor(private productservice:ProductService,private modalService: NgbModal,private orderservice:OrderService ,
    private tokenStorage:TokenStorgeService ) { }
  ListProducts:Product[];
  product:Product=new Product();
  productUpdated:Product=new Product();
  fproduct :Product= new Product();
  hid:boolean=false;
  order:Order=new Order();
  List:Product[]=[];
  OrderUpdated:Order=new Order();

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
    this.info = {
      token: this.tokenStorage.getToken(),
      username: this.tokenStorage.getUsername(),
      authorities: this.tokenStorage.getAuthorities()};
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
      });
    }
    this.orderservice.getProductList(2).subscribe(
      res=>{
        this.order.products=res.products;
       
      }

    )
  
    this.productservice.getProductList().subscribe(res=>{console.log(res);
      this.ListProducts=res.products
      console.log("prod",this.ListProducts);})

  }
 

// delete product  
  delProd(id:number){
    this.productservice.deleteProduct(id).subscribe(data=>console.log(data))
    location.reload();}
    
  //search
  searchProduct(key:string):void{
    const result : Product[]=[];
    console.log("kukou",key);
    for(const Product of this.ListProducts){
      console.log("moumou",Product.name)
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
      this.hid=true;

  }
  public updateProduct(id:number){
    this.hid=false;
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
  
  edit() {
    this.productservice.updateProduct(this.productUpdated)
      .subscribe(data => {
        this.productservice.addImage(this.imageFile).subscribe();
        this.productservice.addBareCode(this.bareCodeFile).subscribe(data =>console.log(data));
       }
       )
       location.reload();
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

  // add To cart khorm
  
  addToCart(product:Product) { 

    let List: Product[] =this.order.products;

    List.push(product);
    console.log("zahhh",product);
    console.log("ggg",List);
    this.OrderUpdated.products=List;
    console.log("fffff",this.OrderUpdated);
    this.orderservice.addProducttoCart(List,1).subscribe();
   
  }


}
function prod(prod: any) {
  throw new Error('Function not implemented.');
}

