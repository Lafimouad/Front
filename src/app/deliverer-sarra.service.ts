import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';  
import { Observable } from 'rxjs';  
import { Deliverer } from 'src/Deliverer';


@Injectable({
  providedIn: 'root'
})
export class DelivererSarraService {
  
  constructor(private http:HttpClient) { }
  public addDeliverer(deliverer){
    return this.http.post("http://localhost:8081/Deliverer/addDev",deliverer,{responseType:'text' as 'json'});
  }
  public getDeliverebyId(id){
    return this.http.get("http://localhost:8081/Deliverer/findD/"+id);
  }
    public getDeliverer(){
      return this.http.get("http://localhost:8081/Deliverer/getD");
    }
    public deletDeliverer(id){
      return this.http.delete("http://localhost:8081/Deliverer/remove/"+id);
    }
    createDeliverer(deliverer: Deliverer) {
      return this.http.post("http://localhost:8081/Deliverer/addDev", deliverer);
    }
    updateDeliverer(deliverer: Deliverer){
      return this.http.put("http://localhost:8081/Deliverer/modify", deliverer);
    }
}