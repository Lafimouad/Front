import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Observable} from 'rxjs';
import { Shelf } from './shelfstock/Shelf';
import { Injectable, Inject } from '@angular/core';
import { SESSION_STORAGE, StorageService } from 'angular-webstorage-service';



const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class ShelfService {

  apiURL1 = 'http://localhost:8081/shelf/add';
  apiURL2 = 'http://localhost:8081/shelf/retrieve-all';
  apiURL3 = 'http://localhost:8081/shelf/retrieve-id';
  apiURL4 = 'http://localhost:8081/shelf/remove-id';
  apiURL5 = 'http://localhost:8081/shelf/update';
  apiURL6 = 'http://localhost:8081/shelf/TypeShelf';
  apiURL7 = 'http://localhost:8081/shelf/ProductToShelf';
  apiURL8 = 'http://localhost:8081/shelf/ProductFromShelf';
  apiURL9 = 'http://localhost:8081/shelf/ProductsNamesByShelf';
  apiURL10 = 'http://localhost:8081/shelf/ProductsByShelf';
  apiURL11 = 'http://localhost:8081/shelf/nbProductByShelf';
  list: Shelf[];

  constructor(@Inject(SESSION_STORAGE) private storage: StorageService,private http: HttpClient) {
  }

  public addShelf(shelf: Shelf): Observable<Shelf> {
    return this.http.post<Shelf>('http://localhost:8081/shelf/add', shelf);
  }

  

  public getShelf2(shelfId: number): Observable<Shelf[]> {
    return this.http.get<Shelf[]>(`http://localhost:8081/shelf/retrieve-id/${shelfId}`);
  }

  public updateShelf(shelf: Shelf): Observable<Shelf> {
    return this.http.put<Shelf>(`http://localhost:8081/shelf/update`, shelf);
  }

  public deleteClient(shelfId: number): Observable<void> {
    return this.http.delete<void>(`http://localhost:8081/shelf/remove-id/${shelfId}`);
  }

  public getNbProductsByshelf(): Observable<number> {
    return this.http.get<number>('http://localhost:8081/product/nbProductByShelf');
  }

  /*public FindProductByIdShelf(): Observable<Product[]> {
    return this.http.get<Product[]>('http://localhost:8081/product/ProductsByShelf');
  }*/


  /* // Fetching all the products
   getProducts(): Observable<any> {
    return this.http.get<any>(environment.baseUrl+environment.productsUrl);
  }*/

  public getShelfs1(): Observable<Shelf[]> {
    return this.http.get<Shelf[]>(`http://localhost:8081/shelf/retrieve-all`);
  }

}
