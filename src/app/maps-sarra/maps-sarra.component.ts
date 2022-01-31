import { Component, OnInit } from '@angular/core';
import { Loader } from '@googlemaps/js-api-loader';
import { styles } from 'src/app/mapstyles';

@Component({
  selector: 'app-maps-sarra',
  templateUrl: './maps-sarra.component.html',
  styleUrls: ['./maps-sarra.component.css']
})
export class MapsSarraComponent implements OnInit {
  title ='google-maps';
  private map: google.maps.Map
  constructor() { }

  ngOnInit(): void {
    let loader = new Loader({
      apiKey:'AIzaSyCIQpf0hmaeU5i1pHM5v0wwtmLSVCIy1Jo'
    })
    loader.load().then(() => {
      console.log('loaded gmaps')

      const location = { lat: 36.891291, lng: 10.180878	 }

      this.map = new google.maps.Map(document.getElementById("map"), {
        center: location,
        zoom: 6,
        
      })

      const marker = new google.maps.Marker({
        position: location,
        map: this.map,
        
      });
    })
    
 
} 
}
