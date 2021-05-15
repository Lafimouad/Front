import { Component, OnInit } from '@angular/core';
import { OrderSARRAService } from '../order-sarra.service';

@Component({
  selector: 'app-order-sarra',
  templateUrl: './order-sarra.component.html',
  styleUrls: ['./order-sarra.component.css']
})
export class OrderSarraComponent implements OnInit {
  orders:any;
  constructor(private service:OrderSARRAService) { }

  ngOnInit(): void {

    let resp=this.service.getOrder();
    resp.subscribe((data)=>this.orders=data);

  }

}
