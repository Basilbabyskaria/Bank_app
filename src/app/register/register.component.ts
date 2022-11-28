import { registerLocaleData } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private router:Router,private ds:DataService) { }

  ngOnInit(): void {
  }

  acno='';
  uname='';
  pswd='';
  register(){
    // alert('clicked register');
    var uname=this.uname;
    var acno=this.acno;
    var pswd=this.pswd;
    const result =this.ds.register(acno,uname,pswd);
    if(result){
      alert("register sucess")
    this.router.navigateByUrl('');
    }
    else{
      alert("register faild")
    this.router.navigateByUrl('register');
    }
  }
}
