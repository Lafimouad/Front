import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class ClaimServiceService {

  constructor(private http: HttpClient) {}
    public addClaim(claim){
      return this.http.post("http://localhost:8081/Claim/add",claim);
    }

    public findCById(idClaim){
      return this.http.get("http://localhost:8081/Claim/Find/"+idClaim);
    }

  public getClaims(){
    return this.http.get("http://localhost:8081/Claim/getC");
  }

  public findCBySubject(subject){
    return this.http.get("http://localhost:8081/Claim/find/"+subject);
  }
  public findCByStatus(status){
    return this.http.get("http://localhost:8081/Claim/find2/"+status);
  }
  public findCBylevelAsc(){
    return this.http.get("http://localhost:8081/Claim/levelAsc");
  }
  public findCBylevelDesc(){
    return this.http.get("http://localhost:8081/Claim/levelDesc");
  }
  public getProduct10Claims(){
    return this.http.get("http://localhost:8081/Product/feedback");
  }

  public deleteClaim(idClaim) : any{
    return this.http.delete("http://localhost:8081/Claim/remove/"+idClaim);
  }



   }

