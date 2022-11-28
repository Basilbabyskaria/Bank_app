import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }
  accDetails:any={
    1000:{acno:1000,pswd:1000,uname:'enjoyal',transaction:[],bal:100},
    1001:{acno:1001,pswd:1001,uname:'akhil',transaction:[]  ,bal:100},
    1002:{acno:1002,pswd:1003,uname:'enjoyal',transaction:[],bal:100},
  }
  register(acno:any,uname:any,pswd:any){
    let accDetails=this.accDetails
    if(acno in accDetails){
      return false;
    }
    else{
      accDetails[acno]={
        acno:acno,
        uname:uname,
        pswd:pswd,
        bal:0,
        transaction:[]
      }
      localStorage.setItem('aaa',accDetails[acno])
      return true;
    }
  }
  currentUser='';
  currentAcno='';
  login(acno:any,pswd:any){
    // alert("click click click");
    var accDetails=this.accDetails;
    if(acno in accDetails){
      if(pswd==accDetails[acno].pswd){
        this.currentUser=accDetails[acno].uname;
        this.currentAcno=acno
        return true;

      }
      else{
        return false;
      }
    }
    else{
      return false;
      
    }
  }
  deposit(acno:any, pswd:any,amount:any){
    let userDetails =this.accDetails;
    amount=parseInt(amount);
    if(acno in userDetails){
      if(pswd== userDetails[acno].pswd){
        userDetails[acno].bal+=amount;
        userDetails[acno]['transaction'].push({
          Type:'credit',Amount:amount
        })
        console.log(`data service ${userDetails[acno].bal}`);
        
        return userDetails[acno].bal;
      }
      else{
        alert('Password Incorrect');
        return false;
      }
    }
    else{
      alert('Invalid userDetails')
      return false;
    }
  }

  withdraw(acno1:any, pswd1:any,amount1:any){
    let userDetails =this.accDetails;
    amount1=parseInt(amount1);
    if(acno1 in userDetails){
      if(pswd1== userDetails[acno1].pswd1){
        if(amount1<userDetails[acno1].bal){
        userDetails[acno1].bal-=amount1;
        userDetails[acno1]['transaction'].push({
          Type:'credit',Amount:amount1
        })
        return userDetails[acno1].bal;
        }else{
          alert("insufficient balance")
        }
      }
      else{
        alert('Password Incorrect');
        return false;
      }
    }
    else{
      alert('Invalid userDetails')
      return false;
    }
  }
  getTransaction(acno:any){
  return this.accDetails[acno].transaction
}
}