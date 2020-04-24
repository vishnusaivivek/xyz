import { Component, OnInit } from '@angular/core';
import {UserService} from '../user.service';
import {FormGroup,FormBuilder,Validators,ReactiveFormsModule} from "@angular/forms";
import { Router } from '@angular/router';
import {User} from '../user.model';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(private userService:UserService,private router:Router) { }

  ngOnInit(): void {
  this.fetchUsers();

  }
  fetchUsers(){
    this.userService
    .getUsers()
    .subscribe((data:User[])=>{
      //this.users=data;
      console.log('data requested.....');
      console.log(data);

    })
  }

}
