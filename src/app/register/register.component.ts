import { registerLocaleData } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private router:Router,private ds:DataService,private fb:FormBuilder) { }
//register model
  registerForm=this.fb.group({
    uname:['',[Validators.required,Validators.pattern('[a-zA-Z]*')]],
    acno:['',[Validators.required,Validators.pattern('[0-9]*')]],
    pswd:['',[Validators.required,Validators.pattern('[0-9a-zA-Z]*')]]
  })

  ngOnInit(): void {
  }

  acno='';
  uname='';
  pswd='';
  register(){
    // alert('clicked register');
    console.log(this.registerForm);
    
    var uname=this.registerForm.value.uname;
    var acno=this.registerForm.value.acno;
    var pswd=this.registerForm.value.pswd;
    if(this.registerForm.valid){
      
      // const result =this.ds.register(acno,uname,pswd);
      this.ds.register(acno,uname,pswd)
      .subscribe((result:any)=>{
        alert(result.message);
        this.router.navigateByUrl('');
      })
    }else{
      alert('invalid form')
    }
    // if(result){
    //   alert("register sucess")
    // this.router.navigateByUrl('');
    // }
    // else{
    //   alert("register faild")
    // this.router.navigateByUrl('register');
    // }
    
    
  }
}

