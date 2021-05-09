import { Component, OnInit } from '@angular/core';
import { AdsService } from '../ads.service';
import { TokenStorgeService } from '../token-storage.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  private roles: string[];
  public authority: string;
  public authoritymanager : boolean = false ;
  public authorityadmin : boolean = false ;
  public authorityclient : boolean = false ;
  public authoritydeliverer : boolean = false ;
  info:any;
  id:any;
  ads: any;
  idAdvertisement:any;
  pas:any;
  isLoggedIn:any;

  constructor(private token:TokenStorgeService,private tokenStorage: TokenStorgeService,private service: AdsService) { }

  ngOnInit() {
    this.info = {
      token: this.token.getToken(),
      username: this.token.getUsername(),
      id: this.gettingid(this.token.getUsername()),
      

      
      
      /*maha*/
      authorities: this.token.getAuthorities()};
      console.log("hedha", this.id);
    
    

    /* this.service.getPa().subscribe((data)=>this.pas=data);

    let resp = this.service.show(this.info.id);
      resp.subscribe((data)=>this.ads=data);*/


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
public gettingid(username: string){
  this.service.wantId(username).subscribe((data)=>{console.log("lafi",data) ;
 this.id=data} );
 console.log("3ak3ek ye moufida");}
/*
public gettingid(username: string){
  let resp = this.service.wantId(username);
    resp.subscribe((data)=>this.id=data);
}
  public showing(id){
  let resp = this.service.show(id);
      resp.subscribe((data)=>this.ads=data);}


     /* public please(){
        this.service.show(this.gettingid(this.info.username));
        console.log("shsar",this.service.show(this.gettingid(this.info.username)))
      
      }*/
      public please(){ 
        let b = {
          idina: this.gettingid(this.info.username)
        }
}
}
