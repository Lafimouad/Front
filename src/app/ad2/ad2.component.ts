import { Component, OnInit } from '@angular/core';
import { Ads } from '../Ads';
import { AdsService } from '../ads.service';

@Component({
  selector: 'app-ad2',
  templateUrl: './ad2.component.html',
  styleUrls: ['./ad2.component.css']
})
export class Ad2Component implements OnInit {
  message:any;
  ads: Ads = new Ads(0,0,"","",0,0,"",0,"") ;
  constructor(private service : AdsService) { }

  ngOnInit(): void {
  }
    addingAd(){
    let resp = this.service.addAd(this.ads)
    resp.subscribe((data)=>this.message=data);
    }

    public updatingAd(ad: Ads){
      this.service.modifyAd(ad).subscribe(
        (response: Ads) => {
          console.log(response);
          this.service.getAds();
        })
      }
}
