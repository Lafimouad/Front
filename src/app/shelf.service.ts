import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Observable} from 'rxjs';
import { Shelf } from './shelfstock/Shelf';
import { Injectable} from '@angular/core';
import { SESSION_STORAGE, StorageService } from 'angular-webstorage-service';
import { environment } from 'src/environments/environment';
import { Product } from './models/product';


@Injectable({
  providedIn: 'root'
})
export class ShelfService {

  private apiServerUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) { }
  
  ///getshelfs
  public getShelfs(): Observable<Shelf[]> {
    return this.http.get<Shelf[]>(`${this.apiServerUrl}/shelf/retrieve-all`,)
  }

  //add shelfs
  public addShelfs(shelf: Shelf): Observable<Shelf> {
    return this.http.post<Shelf>(`${this.apiServerUrl}/shelf/add`,shelf);
  }

  //update shelfs
  public updateShelfs(shelf: Shelf): Observable<Shelf> {
    return this.http.put<Shelf>(`${this.apiServerUrl}/shelf/update`,shelf);
  }

  //delete shelfs
  public deleteShelfs(shelfId: number): Observable<void> {
    return this.http.delete<void>(`${this.apiServerUrl}/shelf/remove-id/${shelfId}`);
  }

  ///getshelfs
  public getProductByShelf(shelfId: number): Observable<Product[]> {
    return this.http.get<Product[]>(`${this.apiServerUrl}/products/ProductsByShelf/${shelfId}`);
  }

  public getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(`${this.apiServerUrl}/product`,)
  }

  

  public AffectProductToShelf(Ids: number,Idp: number): Observable<void> {
    return this.http.delete<void>(`${this.apiServerUrl}/shelf/ProductToShelf/${Ids}/${Idp}`);
  }

  public addquantity(id: number,nb:number): Observable<void>{
    return this.http.delete<void>(`${this.apiServerUrl}/products/ProductQuantityadd/${id}/${nb}`);
  }
  public resetQuantity(id:number): Observable<void>{
    return this.http.delete<void>(`${this.apiServerUrl}/products/resetProduct/${id}`);
  }

  public decrementProductQuantity(id: number): Observable<void>{
    return this.http.delete<void>(`${this.apiServerUrl}/products/ProductQuantitydec/${id}`)
  }
  
  }
