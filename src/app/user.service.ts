import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private clientUrl = 'http://localhost:8081/client';
  private managerUrl = 'http://localhost:8081/manager';
  private adminUrl = 'http://localhost:8081/admin';
  private delivererUrl = 'http://localhost:8081/deliverer';

  constructor(private http: HttpClient) { }

  getClientBoard(): any {
    return this.http.get(this.clientUrl, { responseType: 'text' });
  }

  getManagerBoard(): any {
    return this.http.get(this.managerUrl, { responseType: 'text' });
  }

  getAdminBoard(): any {
    return this.http.get(this.adminUrl, { responseType: 'text' });
  }
  getDelivererBoard(): any {
    return this.http.get(this.delivererUrl, { responseType: 'text' });
  }
}