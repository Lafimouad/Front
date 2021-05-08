import { Component, OnInit } from '@angular/core';
import { AdsService } from '../ads.service';
import { AuthService } from '../auth.service';
import { AuthLoginInfo } from '../auth/login-info';
import { TokenStorgeService } from '../token-storage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  /*maha*/
  id:any;
  data:any;
  /*maha*/
  info : any ; 
  form: any = {};
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  roles: string[] = [];
  private loginInfo: AuthLoginInfo;
  
  

  constructor(private authService: AuthService, private tokenStorage: TokenStorgeService ,private token: TokenStorgeService,private service: AdsService) { }

  ngOnInit() {
    this.info = {
      token: this.token.getToken(),
      username: this.token.getUsername(),
      /*maha*/
      /*id: this.gettingid(this.token.getUsername()),*/

      
      /*maha*/
      authorities: this.token.getAuthorities()};
    if (this.tokenStorage.getToken()) {
      this.isLoggedIn = true;
      this.roles = this.tokenStorage.getAuthorities();
    }
  }

  onSubmit() {
    console.log(this.form);

    this.loginInfo = new AuthLoginInfo(
      this.form.username,
      this.form.password);

    this.authService.attemptAuth(this.loginInfo).subscribe(
      data => {
        this.tokenStorage.saveToken(data.accessToken);
        this.tokenStorage.saveUsername(data.username);
        this.tokenStorage.saveAuthorities(data.authorities);

        this.isLoginFailed = false;
        this.isLoggedIn = true;
        this.roles = this.tokenStorage.getAuthorities();
        this.reloadPage();
      },
      error => {
        console.log(error);
        this.errorMessage = error.error.message;
        this.isLoginFailed = true;
      }
    );
  }

  reloadPage() {
    window.location.reload();
  }
  /*maha*/
  public gettingid(username: string){
     this.service.wantId(username).subscribe((data)=>{console.log("lafi",data) ;
    this.id=data} );
    console.log("3ak3ek ye moufida");
      
  
  /*maha*/
}
}