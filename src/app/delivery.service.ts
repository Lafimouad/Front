import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';  
import { Observable } from 'rxjs';  
import {Delivery} from './delivery';

@Injectable({
  providedIn: 'root'
})
export class DeliveryService {
  url1 = 'http://localhost:8081/Delivery/get';
  url2 = 'http://localhost:8081/Delivery/remove';
  url3 = 'http://localhost:8081/Delivery/add';
  url4 = 'http://localhost:8081/Delivery/find';
  //url5 = 'http://localhost:8081/Delivery/modify';

  
  constructor(private http:HttpClient) {}

   

    getDelivery(): Observable<Delivery[]> {  
      return this.http.get<Delivery[]>(this.url1);  
    } 

    deleteDelivery(id: number): Observable<any> {  
      return this.http.delete(`${this.url2}/${id}`,{ responseType: 'text' });  
    }   
  
    createDelivery(delivery: object): Observable<object> {  
      return this.http.post(`${this.url3}`+'save-delivery', delivery);  
    }  
    getDelivery2(id: number): Observable<Object> {  
      return this.http.get(`${this.url4}/${id}`);  
    } 
  
   /** updateDelivery(id: number, value: any): Observable<Object> {  
      return this.http.post(`${this.url5}/${id}`, value);  
    } 
  }

    public addDelivery (delivery: Delivery): Observable<Delivery> {
      return this.http.post<Delivery>(`http://localhost:8080/Delivery/add`, delivery);
    } 
  
    public updateDelivery(delivery: Delivery): Observable<Delivery> {
      return this.http.put<Delivery>(`http://localhost:8080/Delivery/modify`, delivery);
    }
  
    public deleteDelivery(deliveryId: number): Observable<void> {
      return this.http.delete<void>(`http://localhost:8080/Delivery/remove/${deliveryId}`);
    }**/
}