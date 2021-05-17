import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Donation } from './shelfstock/Donation';
import { Pool } from './shelfstock/Pool';
import { Events } from './shelfstock/Events';


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

  ///getdonation
  public getDonation(): Observable<Donation[]> {
    return this.http.get<Donation[]>(`${this.apiServerUrl}/Donation/retrieve-all`,)
  }

  ///getEvents
  public getEvents(): Observable<Events[]> {
    return this.http.get<Events[]>(`${this.apiServerUrl}/event/retrieve-all`,)
  }

   //add Events
   public addShelfs(Events: Events): Observable<Events> {
    return this.http.post<Events>(`${this.apiServerUrl}/event/add-id`,Events);
  }

  /////

  addImage(L: File): Observable<any>{
        
    const file = new FormData();
    
     file.append('file', L);
    return this.http.put('http://localhost:8081/imageshelf/uploadevent',file)}

  ///////////////////////

  //delete shelfs
  public deleteEvents(idEvent: number): Observable<void> {
    return this.http.delete<void>(`${this.apiServerUrl}/event/remove-id/${idEvent}`);
  }

  //////////////////////////////

  //update shelfs
  public updateEvents(events: Events): Observable<Events> {
    return this.http.put<Events>(`${this.apiServerUrl}/event/update`,events);
  }

}
