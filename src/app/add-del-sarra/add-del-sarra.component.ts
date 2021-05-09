import { Component, OnInit } from '@angular/core';
import { Deliverer } from 'src/Deliverer';
import { DelivererSarraService } from '../deliverer-sarra.service';
import { Router } from '@angular/router';
import {Location} from '@angular/common';

@Component({
  selector: 'app-add-del-sarra',
  templateUrl: './add-del-sarra.component.html',
  styleUrls: ['./add-del-sarra.component.css']
})
export class AddDelSarraComponent implements OnInit {
  //deliverer: Deliverer=new Deliverer("","","",0,0,true,0,true,0,0,0);
  message:any;
  constructor(private service:DelivererSarraService, private router: Router, private _location: Location) { }

  deliverer: Deliverer = new Deliverer();

  submitted = false;
  ngOnInit(): void {
  }
  newEmployee(): void {
    this.submitted = false;
    this.deliverer = new Deliverer();
  }

  save() {
    this.service
    .createDeliverer(this.deliverer).subscribe(data => {
      console.log(data)
      this.deliverer = new Deliverer();
      this.gotoList();
    }, 
    error => console.log(error));
  }

  onSubmit() {
    this.submitted = true;
    this.save();    
  }

  gotoList() {
    this.router.navigate(['/deliverySarra']);
  }
  backClicked() {
    this._location.back();
  }
}
