import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';  
import { Observable } from 'rxjs';  
import { Deliverer } from 'src/Deliverer';
@Injectable({
  providedIn: 'root'
})
export class OrderSARRAService {

  constructor(private http:HttpClient) {}
 
  public getOrder(){
    return this.http.get("http://localhost:8081/order/get");
  }
}
