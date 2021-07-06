import { Component, OnInit } from '@angular/core';
import { Advertisement } from '../Ads';
import { AdsService } from '../ads.service';
import { Client } from '../auth/ClientInfo';
import { TokenStorgeService } from '../token-storage.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  submitted = false;
  private roles: string[];
  public authority: string;
  public authoritymanager : boolean = false ;
  public authorityadmin : boolean = false ;
  public authorityclient : boolean = false ;
  public authoritydeliverer : boolean = false ;
  username: string;
  info:any;
  id:any;
  ad: any;
  ads: any;
  idAdvertisement:any;
  pas:any;
  isLoggedIn:any;
  see : number;
  jdida : Advertisement;
  finalviews: number;
  message : any;
  client:Client;
  idUser: number;
  idAdvertisment:number;
  channel:string;
  cost:number;
  dateAdvertisment:string;
  targetviews:number;
  enddate:string;
  typeAdvertisement: string;
  show: boolean = false;
  constructor(private token:TokenStorgeService,private tokenStorage: TokenStorgeService,private service: AdsService) { }

  ngOnInit() {
    this.info = {
      token: this.token.getToken(),
      username: this.token.getUsername(),
      

      /*maha*/
      authorities: this.token.getAuthorities()};

     // let resp = this.service.show(this.info.username);
     // resp.subscribe((data)=>this.pas=data);


      
      
    
     


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
  this.service.wantId(username).subscribe((data)=>{console.log("lafi est belle",data) ;
 this.id=data} );
 console.log("3ak3ek ye moufida");}

public target(){
  this.submitted = true
  this.service.wantId(this.info.username).subscribe((data)=>{console.log("get id",data) ;
      this.id=data;
      console.log("hedha id", this.id);
      // this.service.views(3).subscribe((res)=>{console.log("lafi2",res) ;
      this.service.findAById(this.id).subscribe((res)=>{console.log("get pub",res) ;
      this.ad=res;
      this.ad.finalviews++;
     /*console.log("hedhi pub", this.ad);
     
     console.log("hedhi number", this.ad.finalviews);
     console.log("pub again", this.ad);*/

     this.jdida = new Advertisement();
     this.jdida.idAdvertisment=this.ad.idAdvertisment;
     this.jdida.channel=this.ad.channel;
      this.jdida.cost= this.ad.cost;
      this.jdida.dateAdvertisment=this.ad.dateAdvertisment;
      this.jdida.targetviews=this.ad.targetviews;
      this.jdida.enddate=this.ad.enddate;
      this.jdida.typeAdvertisement=this.ad.typeAdvertisement;
      this.jdida.client=this.ad.client;
     console.log(" jdida", this.jdida);
     this.jdida.finalviews=this.ad.finalviews;
     this.service.addAd(this.jdida).subscribe((data)=>this.message=data);

     this.service.show(this.info.username).subscribe((data)=>this.pas=data);
    

    } );   });}


    showMe(){
      this.show=true;
      this.service.show(this.info.username).subscribe((data)=>this.pas=data);
      console.log("esmou", this.info.username)
      this.target();

    }

/*
public gettingid(username: string){
  let resp = this.service.wantId(username);
    resp.subscribe((data)=>this.id=data);
}
  public showing(id){
  let resp = this.service.show(id);
      resp.subscribe((data)=>this.ads=data);}


     /*public please(){
        this.service.show(this.gettingid(this.info.username));
        console.log("shsar",this.service.show(this.gettingid(this.info.username)))
      
      }*/
    }