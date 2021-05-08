import { Component, OnInit } from '@angular/core';
import { Ads } from '../Ads';
import { AdsService } from '../ads.service';

@Component({
  selector: 'app-ad3',
  templateUrl: './ad3.component.html',
  styleUrls: ['./ad3.component.css']
})
export class Ad3Component implements OnInit {
  ads:any;

  constructor(private service : AdsService) { }

  ngOnInit() {
    let resp = this.service.getAds();
      resp.subscribe((data)=>this.ads=data);
  }
  public deletingAd(idAdvertisement:number){
    let resp = this.service.deleteAd(idAdvertisement);
      resp.subscribe((data)=>this.ads=data);
  }

  public updatingAd(ad: Ads){
    this.service.modifyAd(ad).subscribe(
      (response: Ads) => {
        console.log(response);
        this.service.getAds();
      })
    }
}
