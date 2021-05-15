import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Pool } from './shelfstock/Pool';

@Injectable({
  providedIn: 'root'
})
export class EventsService {

  private apiServerUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) { }

  ///getPool
  public getPool(): Observable<Pool[]> {
    return this.http.get<Pool[]>(`${this.apiServerUrl}/pool/retrieve-all`,)
  }
}
