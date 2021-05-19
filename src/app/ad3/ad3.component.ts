import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Advertisement } from '../Ads';
import { AdsService } from '../ads.service';
import { Client } from '../auth/ClientInfo';

@Component({
  selector: 'app-ad3',
  templateUrl: './ad3.component.html',
  styleUrls: ['./ad3.component.css']
})
export class Ad3Component implements OnInit {
  ads:Advertisement[];
  advertisement:Advertisement;
  client:Client;
  editAds: Advertisement;
  idUser:any;
  neww:Advertisement;
  idAdvertisment:number;
  channel:string;
  cost:number;
  dateAdvertisment:string;
  targetviews:number;
  enddate:string;
  typeAdvertisement: string;
  message:any;

  constructor(private service : AdsService) { }

  ngOnInit() {
    this.getAllAds();
  }
  public deletingAd(idAdvertisement:number){
    let resp = this.service.deleteAd(idAdvertisement);
      resp.subscribe((data)=>this.ads=data);
  }


  public updatingAd(advertisement: Advertisement): void{
    
      this.client=new Client();
      this.client.idUser = this.editAds.client.idUser;
      console.log("gimme client", this.client)
      this.neww=new Advertisement();
      this.neww.idAdvertisment=advertisement.idAdvertisment;
      this.neww.cost= advertisement.cost;
      this.neww.channel=advertisement.channel;
      this.neww.dateAdvertisment=advertisement.dateAdvertisment;
      this.neww.targetviews=advertisement.targetviews;
      this.neww.enddate=advertisement.enddate;
      this.neww.typeAdvertisement=advertisement.typeAdvertisement;
      console.log("gimme ad", this.neww)
      this.neww.client=this.client;
      console.log("gimme ad again", this.neww)

    
      this.service.addAd(this.neww).subscribe((data)=>this.message=data);
    }
  
  /*public updatingAd(advertisement: Advertisement): void{
    this.advertisement=this.editAds;
    this.service.modifyAd(advertisement).subscribe((data)=>{
      this.advertisement=data;
      this.advertisement.client=this.editAds.client;
      console.log("whaaaaat",this.advertisement);
      //this.advertisement.client=this.editAds.client;


},
    
    

      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    )  }*/


    public getAllAds(): void {
      this.service.getAds().subscribe(
        (response: Advertisement[]) => {
          this.ads = response;
          console.log(this.ads);
        },
        (error: HttpErrorResponse) => {
          alert(error.message);
        }
      );
    }





    public onOpenModal(advertisement: Advertisement,mode: string): void{
      const container = document.getElementById('main-container');
      const button = document.createElement('button');
      button.type='button';
      button.style.display='none';
      button.setAttribute('data-toggle','modal');
      if (mode == 'edit') {
        this.editAds = advertisement;
        console.log("edit ads", this.editAds)
      
        button.setAttribute('data-target','#updateAdsModal');

      }  
      
      container.appendChild(button);
      
      
      button.click();   
  }
}
