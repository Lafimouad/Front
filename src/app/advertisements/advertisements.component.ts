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
  

  constructor( private token:TokenStorgeService,private service: AdsService) { }

  ngOnInit() {
    this.info = {
      token: this.token.getToken(),
      id: this.gettingid(this.token.getUsername()),
      
  }

}

public gettingid(username: string){
  let resp = this.service.wantId(username);
    resp.subscribe((data)=>this.id=data);
}

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

