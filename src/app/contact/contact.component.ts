import { Component, OnInit } from '@angular/core';
import { Claim } from '../claim';
import { ClaimServiceService } from '../claim-service.service';
import { TokenStorgeService } from '../token-storage.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  claim: Claim = new Claim(0,0,"","","","","","","","","","") ;
  message:any;
  errorMessage = '';
  private roles: string[];
  public authority: string;
  public authoritymanager : boolean = false ;
  public authorityadmin : boolean = false ;
  public authorityclient : boolean = false ;
  public authoritydeliverer : boolean = false ;
  info : any ; 


  constructor(private service: ClaimServiceService, private tokenStorage: TokenStorgeService , private token:TokenStorgeService) { }

  
    ngOnInit() {
      this.info = {
        token: this.token.getToken(),
        username: this.token.getUsername(),
        authorities: this.token.getAuthorities()};
      if (this.tokenStorage.getToken()) {
        this.roles = this.tokenStorage.getAuthorities();
        this.roles.every(role => {
          if (role === 'ROLE_ADMIN') {
            this.authority = 'admin';
            this.authorityadmin = true;
            return false;
          } else if (role === 'ROLE_CLIENT') {
            this.authority = 'client';
            this.authorityclient = true;
            return false;
          }else if (role === 'ROLE_DELIVERER') {
            this.authority = 'deliverer';
            this.authoritydeliverer = true;
            return false;
          }else if (role === 'ROLE_MANAGER') {
            this.authority = 'manager';
            this.authoritymanager = true;
            return false;
          }
          this.authority = 'user';
          return true;
        });
      }
    }

    public addingClaim(){
    let resp = this.service.addClaim(this.claim)
    resp.subscribe((data)=>this.message=data);
    }
  

}
