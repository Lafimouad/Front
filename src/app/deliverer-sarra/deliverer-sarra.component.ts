import { Component, OnInit } from '@angular/core';
import { Deliverer } from 'src/Deliverer';
import { DelivererSarraService } from '../deliverer-sarra.service';
import { HttpErrorResponse } from '@angular/common/http';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-deliverer-sarra',
  templateUrl: './deliverer-sarra.component.html',
  styleUrls: ['./deliverer-sarra.component.css']
})
export class DelivererSarraComponent implements OnInit {
  deliverers: any;
  id:number;
  firstNameUser: any;
  idUser:any;
  constructor(private service:DelivererSarraService) { }
  public delteDel(id:number){
    let resp= this.service.deletDeliverer(id);
    resp.subscribe((data)=>this.deliverers=data);
   }
  public findDelivererById(){
    let resp= this.service.getDeliverebyId(this.id);
    resp.subscribe((data)=>this.deliverers=data);
   }
  ngOnInit(): void {
    let resp=this.service.getDeliverer();
    resp.subscribe((data)=>this.deliverers=data);

  }
Search(){
  if(this.firstNameUser==""){
    this.ngOnInit();
  }else {
    this.deliverers=this.deliverers.filter(res=>{
      return res.firstNameUser.toLocaleLowerCase().match(this.firstNameUser.toLocaleLowerCase());
    })
  }
}
Searchh(){
  if(this.idUser==""){
    this.ngOnInit();
  }else {
    this.deliverers=this.deliverers.filter(res=>{
      return res.idUser.toString().toLocaleLowerCase().match(this.idUser.toString().toLocaleLowerCase());
    })
  }
}}
