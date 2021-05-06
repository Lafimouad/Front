import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SignUpInfoM } from './auth/SignUpInfo';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class UserService {


 
  private managerUrl = 'http://localhost:8081/register/manager';

  constructor(private http: HttpClient) { }


  signUp(info: SignUpInfoM): any {
    console.log(info);
    return this.http.post(this.managerUrl, info, httpOptions);
  }

 /* getManagerBoard(): any {
    return this.http.get(this.managerUrl, { responseType: 'text' });
  }*/
}