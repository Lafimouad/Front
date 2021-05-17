import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Order } from '../models/order';
import { Product } from '../models/product';

@Injectable({
    providedIn: 'root'
})

export class OrderService {

    private baseUrl = 'http://localhost:8081/order/';

    constructor(private http: HttpClient) { }

     //get all user order products
     getProductList(id:number): Observable<any> {
        return this.http.get(`${this.baseUrl}user/${id}`);
    }
    //add products to order

    addProducttoCart(List:any ,id:number): Observable<any>{
        return this.http.put(`${this.baseUrl}man/${id}`,List);

    }

    //create order
    createOrder(order:Order) :Observable<any>{
        return this.http.post(`${this.baseUrl}`,order);

    }

    deleteProductfromCart(List:any,id:number): Observable<any>{
        return this.http.put(`${this.baseUrl}del/${id}`,List);

    }

}