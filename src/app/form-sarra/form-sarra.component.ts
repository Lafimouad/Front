import { Component, OnInit } from '@angular/core';
import {Delivery} from '../delivery';
import { DelivererSarraService } from '../deliverer-sarra.service';
import { Router } from '@angular/router';
import {Location} from '@angular/common';
import { DeliveryService } from '../delivery.service';  
import { MeansOfTransport } from '../delivery';
@Component({
  selector: 'app-form-sarra',
  templateUrl: './form-sarra.component.html',
  styleUrls: ['./form-sarra.component.css']
})
export class FormSarraComponent implements OnInit {
  delivery : Delivery;
  constructor(private service:DeliveryService, private router: Router, private _location: Location) {}
  transport = MeansOfTransport;
  enumKeys=[];
  alert: boolean = false;
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
    this.alert=true;
    
  }

  gotoList() {
    this.router.navigate(['/delivery']);
  }

  backClicked() {
    this._location.back();
  }



}
