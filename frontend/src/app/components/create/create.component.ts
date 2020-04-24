import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import{MatTableDataSource} from '@angular/material/table';
import {MatCheckboxModule } from '@angular/material/checkbox';
import{UserService} from '../../user.service';
import {User} from '../../user.model';
import {FormGroup,FormBuilder,Validators,FormControl} from "@angular/forms";
@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})

export class CreateComponent implements OnInit {

  createForm:FormGroup;
  constructor( private userservice:UserService,private router:Router,private fb:FormBuilder) { 
    this.createForm=this.fb.group({
      
    name:["",Validators.required],
    mail:["",Validators.required],
    gender:"",
    phoneno:["",Validators.required],
    alternateph:"",
    dob:["",Validators.required],
    profilephoto:"",
    password:["",Validators.required],
    confirmpassword:["",Validators.required],
    securityqun:["",Validators.required],
    securityans:["",Validators.required],
     check:["",Validators.required]


    });
  }
  addUser(name,mail,gender,phoneno,alternateph,dob,profilephoto,password,confirmpassword,securityqun,securityans ){
    
    this.userservice.addUser(name,mail,gender,phoneno,alternateph,dob,profilephoto,password,confirmpassword,securityqun,securityans).subscribe(()=>{
        this.router.navigate(['/list']);
    });
    
    
  }
  

  ngOnInit(): void {
//this.addUser();

  }
}


