import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';  
import { Observable } from 'rxjs';  
import { Deliverer } from 'src/Deliverer';
import { Delivery } from './delivery';
@Injectable({
  providedIn: 'root'
})
export class OrderSARRAService {

  constructor(private http:HttpClient) {}
 
  public getOrder(){
    return this.http.get("http://localhost:8081/order/get");
  }
  public addPromotion(delivery: Delivery): Observable<Delivery> {
    return this.http.post<Delivery>('http://localhost:8081/Delivery/add', delivery);
  }
  getFrais(id){
    return this.http.put('http://localhost:8081/Delivery/frais/',+id);
  }
  public getDelivery(){
    return this.http.get("http://localhost:8081/Delivery/get");
  }
  public getMaxDelivery(){
    return this.http.get("http://localhost:8081/Delivery/maxid");
  }
  updateDeliveryform(delivery: Delivery){
    return this.http.put('http://localhost:8081/Delivery/modiify', delivery);
  }

}