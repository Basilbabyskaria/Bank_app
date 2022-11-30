import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {//third executed
  aim="your perfect banking partner";//string inter polation
  account="Enter your account no" //property binding
  //class - collection of properties and methods
  //properties/variables 
  //usrdefined methodes //4 th executed

  constructor(private router:Router,private ds:DataService,private fb:FormBuilder) { //first executed
    //it autiomaically invokes when the object is created
    }
    loginForm=this.fb.group({
      acno:['',[Validators.required,Validators.pattern('[0-9]*')]],
      pswd:['',[Validators.required,Validators.pattern('[0-9a-zA-Z]*')]]
    })

  ngOnInit(): void {//second executed
    //angular life cycle hook
    //for initial process of component
  }
  
  acno='';
  acnochange(event:any){
    this.acno=event.target.value;
    console.log(this.acno);
    
  }

  pswd='';
  pswdchange(event:any){
    this.pswd=event.target.value;
    console.log(this.pswd);
    
  }
  //*
  // login(){
  //   // alert("click click click");
  //   var acno=this.acno;
  //   var pswd=this.pswd;
  //   var accDetails:any={
  //     1000:{acno:1000,pswd:1000,name:'enjoyal'},
  //     1001:{acno:1001,pswd:1001,name:'akhil'},
  //     1002:{acno:1002,pswd:1003,name:'enjoyal'},
  //   }
  //   if(acno in accDetails){
  //     if(pswd==accDetails[acno].pswd){
  //       alert("success");
  //     }
  //     else{
  //       alert("try again");
  //     }
  //   }
  //   else{
  //     alert("try again");
  //   }
  // }

  //** 
  // login(acn:any,psw:any){
  //   // alert("click click click");
  //   var acno=acn.value;
  //   var pswd=psw.value;
  //   var accDetails:any={
  //     1000:{acno:1000,pswd:1000,name:'enjoyal'},
  //     1001:{acno:1001,pswd:1001,name:'akhil'},
  //     1002:{acno:1002,pswd:1003,name:'enjoyal'},
  //   }
  //   if(acno in accDetails){
  //     if(pswd==accDetails[acno].pswd){
  //       alert("success");
  //     }
  //     else{
  //       alert("try again");
  //     }
  //   }
  //   else{
  //     alert("try again");
  //   }
  // }

  // login(){
  //   // alert("click click click");
  //   var acno=this.acno;
  //   var pswd=this.pswd;
  //   var accDetails=this.ds.accDetails;
  //   if(acno in accDetails){
  //     if(pswd==accDetails[acno].pswd){
  //       alert("success");
  //       this.router.navigateByUrl('dashboard')
  //     }
  //     else{
  //       alert("try again");
  //     }
  //   }
  //   else{
  //     alert("try again");
  //   }
  // }
  login(){
    var acno=this.loginForm.value.acno;
    var pswd=this.loginForm.value.pswd;
    if(this.loginForm.valid){

    const result =this.ds.login(acno,pswd);
    if(result){
      alert("login sucess")
    this.router.navigateByUrl('dashboard');
    }
    else{
      alert("login faild")
    this.router.navigateByUrl('');
    }
  }else{
    alert("invert")
  }
  }
}

