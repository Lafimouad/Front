import { Component, OnInit } from '@angular/core';
import { ClaimServiceService } from '../claim-service.service';
import { TokenStorgeService } from '../token-storage.service';
import { User } from '../user';

@Component({
  selector: 'app-display-claim',
  templateUrl: './display-claim.component.html',
  styleUrls: ['./display-claim.component.css']
})
export class DisplayClaimComponent implements OnInit {
  claim:any;
  user: User;
  subject : string;
  status: string;
  level: number;
  idClaim: number;
  private roles: string[];
  public authority: string;
  public authoritymanager : boolean = false ;
  public authorityadmin : boolean = false ;
  public authorityclient : boolean = false ;
  public authoritydeliverer : boolean = false ;
  info : any ; 
  boo: boolean;
  

  constructor(private service:ClaimServiceService, private tokenStorage: TokenStorgeService , private token:TokenStorgeService) { }

  ngOnInit() {
      

      let resp = this.service.getClaims();
      resp.subscribe((data)=>this.claim=data);


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

  public gettingBysubject(){
    let resp = this.service.findCBySubject(this.subject);
      resp.subscribe((data)=>this.claim=data);
  }
  public gettingByid(){
    let resp = this.service.findCById(this.idClaim);
      resp.subscribe((data)=>this.claim=data);
  }

  public gettingBystatus(){
    let resp = this.service.findCByStatus(this.status);
      resp.subscribe((data)=>this.claim=data);
  }
  public gettingBystatus2(){
    let resp = this.service.findCByStatus2(this.status);
      resp.subscribe((data)=>this.claim=data);
  }
  public gettingBylevelA(){
    let resp = this.service.findCBylevelAsc();
      resp.subscribe((data)=>this.claim=data);
  }
  public gettingBylevelD(){
    let resp = this.service.findCBylevelDesc();
      resp.subscribe((data)=>this.claim=data);
  }

  public deletingClaim(idClaim:number){
    let resp = this.service.deleteClaim(idClaim);
      resp.subscribe((data)=>this.claim=data);
  }

  public func (){

    let level=this.level
    if (level==1) {
    this.boo = true; 
    return this.gettingBylevelA();}
    else 
    return this.gettingBylevelD();
  

}

public func2 (){

  let status=this.status
  if (status="Treated")
  return this.gettingBystatus();
  else 

  return this.gettingBystatus2();

}
}




