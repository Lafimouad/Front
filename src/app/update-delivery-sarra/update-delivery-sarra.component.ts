import { Component, OnInit } from '@angular/core';
import {Delivery} from '../delivery';
import { DelivererSarraService } from '../deliverer-sarra.service';
import { Router } from '@angular/router';
import {Location} from '@angular/common';
import { DeliveryService } from '../delivery.service';  
import { MeansOfTransport } from '../delivery';
@Component({
  selector: 'app-update-delivery-sarra',
  templateUrl: './update-delivery-sarra.component.html',
  styleUrls: ['./update-delivery-sarra.component.css']
})
export class UpdateDeliverySarraComponent implements OnInit {
  delivery : Delivery;
  constructor(private service:DeliveryService, private router: Router, private _location: Location) {}
  transport = MeansOfTransport;
  enumKeys=[];
  ngOnInit(): void {
    this.delivery = new Delivery();
  }

  updateDelivery() {
    this.service.updateDelivery(this.delivery)
      .subscribe(data => {
        console.log(data);
        this.delivery = new Delivery();
        this.gotoList();
      }, error => console.log(error));
  }

  onSubmit() {
    this.updateDelivery();    
  }

  gotoList() {
    this.router.navigate(['/delivery']);
  }

  backClicked() {
    this._location.back();
  }



}