import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Observable} from 'rxjs';
import { Shelf } from './shelfstock/Shelf';
import { Injectable} from '@angular/core';
import { SESSION_STORAGE, StorageService } from 'angular-webstorage-service';
import { environment } from 'src/environments/environment';


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

  
  }
