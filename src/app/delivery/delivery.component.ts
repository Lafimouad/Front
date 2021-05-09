import { Component, OnInit } from '@angular/core';
import { DeliveryService } from '../delivery.service';  
import { Delivery } from '../delivery';  
import { Observable,Subject } from "rxjs"; 
import {FormControl,FormGroup,Validators} from '@angular/forms'; 
@Component({
  selector: 'app-delivery',
  templateUrl: './delivery.component.html',
  styleUrls: ['./delivery.component.css']
})
export class DeliveryComponent implements OnInit {
  deliveries: any;
  id:number;
  id_delivery: any;
  destination_delivery: any;
  constructor(private service:DeliveryService) { }
  public delteDel(id:number){
    let resp= this.service.deleteDelivery(id);
    resp.subscribe((data)=>this.deliveries=data);
   }
  public findDelivererById(){
    let resp= this.service.getDelivery2(this.id);
    resp.subscribe((data)=>this.deliveries=data);
   }
  ngOnInit(): void {
    let resp=this.service.getDelivery();
    resp.subscribe((data)=>this.deliveries=data);

  }
Search(){
  if(this.id_delivery==""){
    this.ngOnInit();
  }else {
    this.deliveries=this.deliveries.filter(res=>{
      return res.id_delivery.toString().toLocaleLowerCase().match(this.id_delivery.toString().toLocaleLowerCase());
    })
  }
}
Searchh(){
  if(this.destination_delivery==""){
    this.ngOnInit();
  }else {
    this.deliveries=this.deliveries.filter(res=>{
      return res.destination_delivery.toString().toLocaleLowerCase().match(this.destination_delivery.toString().toLocaleLowerCase());
    })
  }
}
  }  



