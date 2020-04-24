import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ReviewService {

 uri='http://localhost:3000';

  constructor(private http:HttpClient) { }
  getReviews(){
    return this.http.get(`${this.uri}/review/getreviews`);
  }
  addReview(shopname,rating,review){
    const rev={
      shopname:shopname,
      rating:rating,
      review:review
    };
    return this.http.post(`${this.uri}/review`,rev);
  }
}
