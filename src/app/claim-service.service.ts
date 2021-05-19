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

    public findCById(idClaim): any{
      return this.http.get("http://localhost:8081/Claim/Find/"+idClaim);
    }

  public getClaims(){
    return this.http.get("http://localhost:8081/Claim/getC");
  }

  public findCBySubject(subject): any{
    return this.http.get("http://localhost:8081/Claim/find/"+subject);
  }
  public findCByStatus(): any{
    return this.http.get("http://localhost:8081/Claim/find2");
  }

  public findCByStatus2(): any{
    return this.http.get("http://localhost:8081/Claim/find3");
  }
  public findCBylevelAsc(): any{
    return this.http.get("http://localhost:8081/Claim/levelAsc");
  }
  public findCBylevelDesc(): any{
    return this.http.get("http://localhost:8081/Claim/levelDesc");
  }
  public getProduct10Claims(): any{
    return this.http.get("http://localhost:8081/Product/feedback");
  }

  public deleteClaim(idClaim) : any{
    return this.http.delete("http://localhost:8081/Claim/remove/"+idClaim);
  }

  public answerClaim(claim){
    return this.http.put("http://localhost:8081/Claim/decision",claim)

  }

   }

