import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  aim="your perfect banking partner";//string inter polation
  user='';
  constructor(private ds:DataService,private fb:FormBuilder) { 
    this.user=this.ds.currentUser;
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
    const result=this.ds.deposit(acno,pswd,amount);
    console.log(`dashboard ${result}`);
    
    if(result){
      alert(`${amount} is deposited... Available balance is ${result}`);
    }
    else{
      alert('Transaction error');
    }
  }


  withdraw(){
    var acno1=this.withdrawForm.value.acno1; 
    var pswd1=this.withdrawForm.value.pswd1;
    var amount1=this.withdrawForm.value.amount1;
    const result=this.ds.withdraw(acno1,pswd1,amount1);
    if(result){
      alert(`${amount1} is withdrawed... Available balance is ${result}`);
    }
    else{
      alert('Transaction error');
    }


  }
}
