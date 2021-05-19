import { Component, OnInit } from '@angular/core';
import { Advertisement } from '../Ads';
import { AdsService } from '../ads.service';
import { Client } from '../auth/ClientInfo';

@Component({
  selector: 'app-ad2',
  templateUrl: './ad2.component.html',
  styleUrls: ['./ad2.component.css']
})
export class Ad2Component implements OnInit {
  message:any;
  ads: Advertisement = new Advertisement() ;
  client:Client;
  idUser: number;
  idAdvertisment:number;
  channel:string;
  cost:number;
  dateAdvertisment:string;
  targetviews:number;
  enddate:string;
  typeAdvertisement: string;
  constructor(private service : AdsService) { }

  ngOnInit(): void {
  }
    addingAd(){
      this.client=new Client();
      this.client.idUser = this.idUser;
      console.log("gimme client", this.client)
      this.ads=new Advertisement();
      this.ads.channel=this.channel;
      this.ads.cost= this.cost;
      this.ads.dateAdvertisment=this.dateAdvertisment;
      this.ads.targetviews=this.targetviews;
      this.ads.enddate=this.enddate;
      this.ads.typeAdvertisement=this.typeAdvertisement;
      console.log("gimme ad", this.ads)
      this.ads.client=this.client;
      console.log("gimme ad again", this.ads)

    
      this.service.addAd(this.ads).subscribe((data)=>this.message=data);
    }

    public updatingAd(ad: Advertisement){
      this.service.modifyAd(ad).subscribe(
        (response: Advertisement) => {
          console.log(response);
          this.service.getAds();
        })
      }
}
