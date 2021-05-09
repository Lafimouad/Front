import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../models/product';

@Injectable({
    providedIn: 'root'
})

export class ProductService {

    private baseUrl = 'http://localhost:8081/product/';

    constructor(private http: HttpClient) { }

    //get all product
    getProductList(): Observable<any> {
        return this.http.get(`${this.baseUrl}` + 'products-list');
    }
    //add photo to product

    addBareCode(L: File): Observable<any>{
        
        const file = new FormData();
        
         file.append('file', L);
        return this.http.post('http://localhost:8081/image',file)
    }

    // product image

    addImage(L: File): Observable<any>{
        
        const file = new FormData();
        
         file.append('file', L);
        return this.http.put('http://localhost:8081/image/upload',file)
    }

    // add a new product
    createProduct(product: object): Observable<object> {
        return this.http.post(`${this.baseUrl}` + 'save-product', product);
    }

    // delete a product
    deleteProduct(id: number): Observable<any> {
        console.log(id);
        return this.http.delete(`${this.baseUrl}delete-product/${id}`);
    }

    // get product by id
    getProduct(id: number): Observable<Object> {
        return this.http.get(`${this.baseUrl}${id}`);
    }

    // update product
    updateProduct( product: Product): Observable<Object> {
        return this.http.put(`${this.baseUrl}`+"update-product/", product);
    }

    // get all prouct by rating

    getProductListByrating(): Observable<any> {
        return this.http.get(`${this.baseUrl}` + 'productbyrating');
    }

    // get a product by name
    getProductByname(name: String): Observable<Object> {
        return this.http.get(`${this.baseUrl}${name}`);
    }
    
    // get All Product By Desc Price
    getProductListByDesc(): Observable<any> {
        return this.http.get(`${this.baseUrl}` + 'productbydesc');
    }

    // get All Product By Asc Price
    getProductListByAsc(): Observable<any> {
        return this.http.get(`${this.baseUrl}` + 'productbyasc');
    }

}
