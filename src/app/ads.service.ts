import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Ads } from './Ads';

@Injectable({
  providedIn: 'root'
})
export class AdsService {

  constructor(private http: HttpClient) { }


 

  public wantId(username): Observable<any>{
    return this.http.get("http://localhost:8081/Ad/fronId/"+username);
  }

  public addAd(ads){
    return this.http.post("http://localhost:8081/Ad/add",ads);
  }
  public findAById(idAdvertisment){
    return this.http.get("http://localhost:8081/Ad/findAd/"+idAdvertisment);
  }

  public getAds(){
    return this.http.get("http://localhost:8081/Ad/getC");
  }
  public deleteAd(idAdvertisment) : any{
    return this.http.delete("http://localhost:8081/Ad/remove/"+idAdvertisment);
  }

  public modifyAd(ad: Ads): any{
    return this.http.put("http://localhost:8081/Ad/modify/",ad);
  }

  public show(username){
    return this.http.get("http://localhost:8081/Ad/getCat2/"+username);

  }

  public getPa(){
    return this.http.get("http://localhost:8081/product");
  }



  public views(id : number){
    return this.http.delete("http://localhost:8081/Ad/fronViews/"+id);
  }
}




