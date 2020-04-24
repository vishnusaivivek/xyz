import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { logging } from 'protractor';
import { ForgetComponent } from './forget/forget.component';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  uri='http://localhost:3000';
  constructor(private http:HttpClient) { }
  getUsers(){
    return this.http.get(`${this.uri}/user/getusers`);
  }
  addUser(name,mail,gender,phoneno,alternateph,dob,profilephoto,password,confirmpassword,securityqun,securityans){
    const user={
      name:name,
      mail:mail,
      gender:gender,
      phoneno:phoneno,
      alternateph:alternateph,
      dob:dob,
      profilephoto:profilephoto,
      password:password,
      confirmpassword:confirmpassword,
      securityqun:securityqun,
      securityans:securityans
      
    };
     console.log(user);
    return this.http.post(`${this.uri}/user/registration`,user);

  }

login(mail,password){
  const user={
    mail:mail,
    password:password
  };
  return this.http.post(`${this.uri}/user/login`,user);}
forget(mail,securityqun,securityans,password){
const user={
  mail:mail,
  securityqun:securityqun,
  securityans:securityans,
  password:password
};
return this.http.post(`${this.uri}/user/forget`,user);}


}






 

