import { Component, OnInit } from '@angular/core';
import { Deliverer } from 'src/Deliverer';
import { DelivererSarraService } from '../deliverer-sarra.service';
import { Router } from '@angular/router';
import {Location} from '@angular/common';


@Component({
  selector: 'app-update-del-sarra',
  templateUrl: './update-del-sarra.component.html',
  styleUrls: ['./update-del-sarra.component.css']
})
export class UpdateDelSarraComponent implements OnInit {
  deliverer : Deliverer;
  constructor(private service:DelivererSarraService, private router: Router, private _location: Location) { }

  ngOnInit(): void {
    this.deliverer = new Deliverer();
  }
    updateDeliverer() {
      this.service.updateDeliverer(this.deliverer)
        .subscribe(data => {
          console.log(data);
          this.deliverer = new Deliverer();
          this.gotoList();
        }, error => console.log(error));
    }
  
    onSubmit() {
      this.updateDeliverer();    
    }
  
    gotoList() {
      this.router.navigate(['/deliverySarra']);
    }
  
    backClicked() {
      this._location.back();
    }


}
