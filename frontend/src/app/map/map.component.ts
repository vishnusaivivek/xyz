import { Component,AfterViewInit } from '@angular/core';
import {ShopService} from '../shop.service';
import { Router } from '@angular/router';

import * as L from 'leaflet';
@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements AfterViewInit{

private map;
lat;
lng;

  constructor(private router:Router,private shopService:ShopService) { }
  getNearby(lat,lng){
    this.shopService.getNearby(lat,lng).subscribe(doc=>{
      const l=Object.keys(doc).length;
      var i=0;
      if(l>0){
                for (i=0;i<l;i++){

            const marker=L.marker([doc[i].latitude,doc[i].longitude]).addTo(this.map);
            marker.setLatLng([doc[i].latitude,doc[i].longitude]);
            marker.bindTooltip(doc[i].name).openTooltip();
          }
        }
      else{
        console.log("no shops found near you");
      }
        this.router.navigate(['/map']);
     })
  };
  private initMap(): void {
    this.map = L.map('map', {
      center: [ 39.8282, -98.5795 ],
      zoom: 3
    });
  
  
  const tiles = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
  });
  tiles.addTo(this.map);
  }  
  getUserLocation() {
    

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position => {
       
        console.log(position.coords);
        const marker=L.marker([position.coords.latitude,position.coords.longitude]).addTo(this.map);
        marker.setLatLng([position.coords.latitude,position.coords.longitude]);
        marker.bindTooltip("Your Location ").openTooltip();
        this.getNearby(position.coords.latitude,position.coords.longitude);
      });
    }
  }
 
  ngAfterViewInit(): void {
    this.initMap();
    this.getUserLocation();
}
      
}
