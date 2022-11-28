import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  aim="your perfect banking partner";//string inter polation
  user='';
  constructor(private ds:DataService) { 
    this.user=this.ds.currentUser;
  }

  ngOnInit(): void {
  }
  acno="";
  pswd='';
  amount='';
  acno1='';
  pswd1='';
  amount1='';
  deposit(){
    var acno=this.acno;  //1000
    var pswd=this.pswd;
    var amount=this.amount;
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
    var acno1=this.acno1; 
    var pswd1=this.pswd1;
    var amount1=this.amount1;
    const result=this.ds.withdraw(acno1,pswd1,amount1);
    if(result){
      alert(`${amount1} is withdrawed... Available balance is ${result}`);
    }
    else{
      alert('Transaction error');
    }


  }
}
