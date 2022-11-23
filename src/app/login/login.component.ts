import { Component, OnInit } from '@angular/core';

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

  constructor() { //first executed
    //it autiomaically invokes when the object is created
    }

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

  login(){
    // alert("click click click");
    var acno=this.acno;
    var pswd=this.pswd;
    var accDetails:any={
      1000:{acno:1000,pswd:1000,name:'enjoyal'},
      1001:{acno:1001,pswd:1001,name:'akhil'},
      1002:{acno:1002,pswd:1003,name:'enjoyal'},
    }
    if(acno in accDetails){
      if(pswd==accDetails[acno].pswd){
        alert("success");
      }
      else{
        alert("try again");
      }
    }
    else{
      alert("try again");
    }
  }

}
