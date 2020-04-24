import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ShopService {
  uri='http://localhost:3000';
  constructor(private http:HttpClient) { }
  getShops(){
    return this.http.get(`${this.uri}/shop/getshops`);
  }
  
  
  addShop(name,latitude,longitude,image1,image2,image3,description,avgrating,markasfav){
   const shop={ name:name,
    latitude:latitude,
    longitude:longitude,
    image1:image1,
    image2:image2,
    image3:image3,
    description:description,
    avgrating:avgrating,
    markasfav:markasfav
  };
  return this.http.post(`${this.uri}/shop/registration`,shop);
  }
 getNearby(lat,lng){
   const location={
     lat:lat,
     lng:lng
   }
  
    return this.http.post(`${this.uri}/shop/getnearby`,location);
  }

}
