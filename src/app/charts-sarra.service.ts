import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class ChartsSarraService {

  constructor(private http: HttpClient) { }
  
  public getNumberDelivery(){
    return this.http.get("http://localhost:8081/Deliverer/countgood");
  }

}
