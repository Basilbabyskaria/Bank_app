import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  aim="your perfect banking partner";//string inter polation
  user:any
  sdate:any;

  constructor(private ds:DataService,private fb:FormBuilder,private router:Router) { 
    // this.user=JSON.parse(localStorage.getItem('currentUser')||'');
    this.sdate=new Date;
  }
  depositForm=this.fb.group({
    acno:['',[Validators.required,Validators.pattern('[0-9]*')]],
    pswd:['',[Validators.required,Validators.pattern('[0-9a-zA-Z]*')]],
    amount:['',[Validators.required,Validators.pattern('[0-9]*')]]

  })
  withdrawForm=this.fb.group({
    acno1:['',[Validators.required,Validators.pattern('[0-9]*')]],
    pswd1:['',[Validators.required,Validators.pattern('[0-9a-zA-Z]*')]],
    amount1:['',[Validators.required,Validators.pattern('[0-9]*')]]
  })

  ngOnInit(): void {

    this.user=JSON.parse(localStorage.getItem('currentUser')||'');
    // console.log(this.user);
    
    // if(!localStorage.getItem('currentAcno')){
    //   alert('please login first')
    //   this.router.navigateByUrl('')
    // }
  }
  acno="";
  pswd='';
  amount='';
  acno1='';
  pswd1='';
  amount1='';
  
  deposit(){
    var acno=this.depositForm.value.acno;  //1000
    var pswd=this.depositForm.value.pswd;
    var amount=this.depositForm.value.amount;
    if(this.depositForm.valid){
      this.ds.deposit(acno,pswd,amount)
    .subscribe((result:any)=>{
      alert(result.message)
    },
      (    result: { error: { message: any; }; })=>{
      alert(result.error.message)
    })
    }
    }
    
    // if(result){
    //   alert(`${amount} is deposited... Available balance is ${result}`);
    // }
    // else{
    //   alert('Transaction error');
    // }
  // }


  withdraw(){
    var acno1=this.withdrawForm.value.acno1; 
    var pswd1=this.withdrawForm.value.pswd1;
    var amount1=this.withdrawForm.value.amount1;
    if(this.withdrawForm.valid){
      this.ds.withdraw(acno1,pswd1,amount1)
    .subscribe((result:any)=>{
      alert(result.message)
    },
      (    result: { error: { message: any; }; })=>{
      alert(result.error.message)
    })
    }
    // if(result){
    //   alert(`${amount1} is withdrawed... Available balance is ${result}`);
    // }
    // else{
    //   alert('Transaction error');
    // }


  }
  logout(){
    localStorage.removeItem('currentAcno');
    localStorage.removeItem('currentUser');
    this.router.navigateByUrl('');

  }
  delete()
{
  this.acno=JSON.parse(localStorage.getItem('currentAcno')||'')
}
onCancel(){
  this.acno='';
}
onDelete(event:any){
  this.ds.deleteAcc(event)
  .subscribe((result:any)=>{
    alert(result.message)
    this.router.navigateByUrl('');
  },
  result=>{
    alert(result.error.message)
  })
}
}
function subscribe(arg0: (result: any) => void, arg1: (result: { error: { message: any; }; }) => void) {
  throw new Error('Function not implemented.');
}

