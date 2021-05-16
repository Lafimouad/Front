import { Component, OnInit } from '@angular/core';
import { Delivery } from '../delivery';
import { DeliveryService } from '../delivery.service';
import { OrderSARRAService } from '../order-sarra.service';
import { HttpErrorResponse } from '@angular/common/http';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-order-sarra',
  templateUrl: './order-sarra.component.html',
  styleUrls: ['./order-sarra.component.css']
})
export class OrderSarraComponent implements OnInit {
  orders:any;
  constructor(private service:OrderSARRAService, private serviceDelivery:OrderSARRAService) { }
  public deliveries: Delivery[];
  ngOnInit(): void {
     
    let resp=this.service.getOrder();
    resp.subscribe((data)=>this.orders=data);

  }
  public onAddPromotion(addForm: NgForm): void {
    document.getElementById('add-employee-form').click();
    this.service.addPromotion(addForm.value).subscribe(
      (response: Delivery) => {
        console.log(response);
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
        addForm.reset();
      }
    );
  }
  public onOpenModal(delivery: Delivery, mode: string): void {
    const container = document.getElementById('main-container');
    const button = document.createElement('button');
    button.type = 'button';
    button.style.display = 'none';
    button.setAttribute('data-toggle', 'modal');
    if (mode === 'add') {
      button.setAttribute('data-target', '#addEmployeeModal');
    }
    
    container.appendChild(button);
    button.click();
  }


}
