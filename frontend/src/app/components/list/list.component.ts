import { Component, OnInit } from '@angular/core';
import {Review} from '../../review.model';
import {ReviewService} from '../../review.service';
import { Router } from '@angular/router';
import{MatTableDataSource} from '@angular/material/table';
import{UserService} from '../../user.service';
import {User} from '../../user.model';
import {Shop} from '../../shop.model';
import{ShopService} from '../../shop.service';
import {FormGroup,FormBuilder,Validators,ReactiveFormsModule} from "@angular/forms";

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  createForm:FormGroup;
 data;


  constructor(private reviewService:ReviewService,private router:Router,private userService:UserService,private shopService:ShopService,private fb:FormBuilder) { 

  this.createForm=this.fb.group({
      
    mail:["",Validators.required,Validators.email],
    password:["",Validators.required,Validators.minLength(6)]
  });
 }
 login(mail,password){
   this.data=mail;
   this.userService.login(mail,password).subscribe(()=>{
    this.router.navigate(['/home']);
   })
 }
 

  ngOnInit(): void {
    //this.fetchReviews();
    //this.fetchUsers();
    //this.fetchShops();
  }
  // fetchShops(){
  //   this.shopService
  //   .getShops()
  //   .subscribe((data:Shop[])=>{
  //     this.shops=data;
  //     console.log('data requested.....');
  //     console.log(this.shops);

  //   });
  // }
  // fetchReviews(){
  //   this.reviewService
  //   .getReviews()
  //   .subscribe((data:Review[])=>{
  //     this.reviews=data;
  //     console.log('data requested.....');
  //     console.log(this.reviews);
  //   });
  // }
  // fetchUsers(){
  //   this.userService
  //   .getUsers()
  //   .subscribe((data:User[])=>{
  //     this.users=data;
  //     console.log('data requested.....');
  //     console.log(this.users);

  //   })
  }



