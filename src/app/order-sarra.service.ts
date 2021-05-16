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

}
