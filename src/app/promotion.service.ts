import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Promotion } from './promotion';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class PromotionService {

  constructor(private http: HttpClient) { }
  public getPromotion(): Observable<Promotion[]> {
    return this.http.get<Promotion[]>("http://localhost:8081/promotion/get");
  }
  public addPromotion(promotion: Promotion): Observable<Promotion> {
    return this.http.post<Promotion>("http://localhost:8081/promotion/add", promotion);
  }

  public updatePromotion(promotion: Promotion): Observable<Promotion> {
    return this.http.put<Promotion>("http://localhost:8081/promotion/modify", promotion);
  }

  public deletePromotion(promotionId: number): Observable<void> {
    return this.http.delete<void>("http://localhost:8081/promotion/remove/"+promotionId);
  }

}
