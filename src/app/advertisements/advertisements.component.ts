import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Ads } from '../Ads';
import { AdsService } from '../ads.service';
import { TokenStorgeService } from '../token-storage.service';

@Component({
  selector: 'app-advertisements',
  templateUrl: './advertisements.component.html',
  styleUrls: ['./advertisements.component.css']
})
export class AdvertisementsComponent implements OnInit {
  info : any ; 
  id:any;
  theads:any;
  idAdvertisement: number;
  private roles: string[];
  public authority: string;
  public authoritymanager : boolean = false ;
  public authorityadmin : boolean = false ;
  public authorityclient : boolean = false ;
  public authoritydeliverer : boolean = false ;
  isLoggedIn : any;
  ads: any;
  pas: any;
  
  

  constructor( private token:TokenStorgeService,private tokenStorage: TokenStorgeService,private service: AdsService) { }

  ngOnInit() {
    this.info = {
      token: this.token.getToken(),
      username: this.token.getUsername(),
      /*maha*/
    //  id: this.gettingid(this.token.getUsername()),
      /*maha*/
      authorities: this.token.getAuthorities()};

      let resp = this.service.show(this.info.username);
      resp.subscribe((data)=>this.pas=data);


      /*maha
      let resp = this.service.show(this.info.id);
      resp.subscribe((data)=>this.ads=data);
      maha*/
    if (this.tokenStorage.getToken()) {
      this.isLoggedIn = true;
      this.roles = this.tokenStorage.getAuthorities();
    }

     //this.service.getPa().subscribe((data)=>this.pas=data);

    


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


  public gettingid(username: string){
    this.service.wantId(username).subscribe((data)=>{console.log("lafi",data) ;
   this.id=data} );
   console.log("3ak3ek ye moufida");}
/*public gettingid(username: string){
  let resp = this.service.wantId(username);
    resp.subscribe((data)=>this.id=data);
}*/

public deletingAd(idAdvertisement:number){
  let resp = this.service.deleteAd(idAdvertisement);
    resp.subscribe((data)=>this.theads=data);
}

public gettingByid(){
  let resp = this.service.findAById(this.idAdvertisement);
    resp.subscribe((data)=>this.theads=data);
}

public updattingAd(ad: Ads){
  this.service.modifyAd(ad).subscribe(
    (response: Ads) => {
      console.log(response);
      this.service.getAds();
    })


}
}







/*  <div  *ngIf="info.token" > 
        <tr *ngFor="let pa of pas">
          
           
         {{pa.name}}
        {{pa.categoryProduct}}
        </tr>
        
    </div>*/