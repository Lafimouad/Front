import { Component, OnInit } from '@angular/core';
import { Delivery } from '../delivery';
import { MeansOfTransport } from '../delivery';

import { DeliveryService } from '../delivery.service';  
import { Router } from '@angular/router';
import {Location} from '@angular/common';
@Component({
  selector: 'app-add-delivery-sarra',
  templateUrl: './add-delivery-sarra.component.html',
  styleUrls: ['./add-delivery-sarra.component.css']
})
export class AddDeliverySarraComponent implements OnInit {

  constructor(private service:DeliveryService, private router: Router, private _location: Location) { 
    this.enumKeys=Object.keys(this.transport);
  }
  transport = MeansOfTransport;
  enumKeys=[];
  delivery: Delivery = new Delivery();
  submitted = false;
  
  ngOnInit(): void {
  }
  newEmployee(): void {
    this.submitted = false;
    this.delivery = new Delivery();
  }
  save() {
    this.service
    .createDelivery(this.delivery).subscribe(data => {
      console.log(data)
      this.delivery = new Delivery();
      this.gotoList();
    }, 
    error => console.log(error));
  }

  onSubmit() {
    this.submitted = true;
    this.save();    
  }

  gotoList() {
    this.router.navigate(['/delivery']);
  }
  backClicked() {
    this._location.back();
  }
  
}
