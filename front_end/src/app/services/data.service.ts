import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
//global http header object to solve overloading error which happens in line 110
const options={
  headers:new HttpHeaders()
}
@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http:HttpClient) {
    // this.getDetails();
   }
  // saveDetails(){
  //   if(this.accDetails){
  //     localStorage.setItem('DataBase',JSON.stringify(this.accDetails));
  //   }
  //   if(this.currentUser){
  //     localStorage.setItem('currentUser',JSON.stringify(this.currentUser));
  //   }
  //   if(this.currentAcno){
  //     localStorage.setItem('currentAcno',JSON.stringify(this.currentAcno));
  //   }
  // }
  // getDetails(){
  //   if(this.accDetails){
  //     this.accDetails=JSON.parse(localStorage.getItem('DataBase')||'');
  //   }
  //   if(this.currentUser){
  //     this.currentUser= JSON.parse(localStorage.getItem('currentUser')||'');
  //   }
  //   if(this.currentAcno){
  //     this.currentAcno=JSON.parse(localStorage.getItem('currentAcno')||'');
  //   }
  // }
  accDetails:any={
    1000:{acno:1000,pswd:1000,uname:'enjoyal',transaction:[],bal:100},
    1001:{acno:1001,pswd:1001,uname:'akhil',transaction:[]  ,bal:100},
    1002:{acno:1002,pswd:1003,uname:'enjoyal',transaction:[],bal:100},
  }
  register(acno:any,uname:any,pswd:any){

    const data={
      acno,
      pswd,
      uname
    }
    return this.http.post('http://localhost:3000/register',data)
    


    // let accDetails=this.accDetails
    // if(acno in accDetails){
    //   return false;
    // }
    // else{
    //   accDetails[acno]={
    //     acno:acno,
    //     uname:uname,
    //     pswd:pswd,
    //     bal:0,
    //     transaction:[]
    //   }
    //   this.saveDetails();
    //   return true;
    // }
  }
  currentUser='';
  currentAcno='';
  login(acno:any,pswd:any){

    const data={
      acno,
      pswd
    }
    return this.http.post('http://localhost:3000/login',data)
    
    // alert("click click click");
    // var accDetails=this.accDetails;
    // if(acno in accDetails){
    //   if(pswd==accDetails[acno].pswd){
    //     this.currentUser=accDetails[acno].uname;
    //     this.currentAcno=acno
    //     this.saveDetails();
    //     return true;

    //   }
    //   else{
    //     return false;
    //   }
    // }
    // else{
    //   return false;
      
    // }
  }
  getToken(){
    const token=JSON.parse(localStorage.getItem('token')||'')
    //append inside the headser
    let headers=new HttpHeaders()
    if(token){
     options.headers=headers.append('x-access-token',token)
    }
    return options;//t get token
  }
  deposit(acno:any, pswd:any,amount:any){
    const data={
      acno,
      pswd,
      amount
    }
    return this.http.post('http://localhost:3000/deposit',data,this.getToken())

    // let accDetails =this.accDetails;
    // amount=parseInt(amount);
    // if(acno in accDetails){
    //   if(pswd== accDetails[acno].pswd){
    //     accDetails[acno].bal+=amount;
    //     accDetails[acno]['transaction'].push({
    //       Type:'credit',Amount:amount
    //     })
    //     console.log(`data service ${accDetails[acno].bal}`);
    //     // this.saveDetails();
        
    //     return accDetails[acno].bal;
    //   }
    //   else{
    //     alert('Password Incorrect');
    //     return false;
    //   }
    // }
    // else{
    //   alert('Invalid accDetails')
    //   return false;
    // }
  }

  withdraw(acno1:any, pswd1:any,amount1:any){
    const data={
      acno1,
      pswd1,
      amount1
    }
    return this.http.post('http://localhost:3000/withdraw',data,this.getToken())
//     let accDetails =this.accDetails;
//     amount1=parseInt(amount1);
//     if(acno1 in accDetails){
//       if(pswd1== accDetails[acno1].pswd){
//         if(accDetails[acno1].bal>=amount1){
//         accDetails[acno1].bal-=amount1;
//         //parsing element to transaction array
//         accDetails[acno1]['transaction'].push({
//           Type:'Debit',Amount:amount1
//         })
//         // this.saveDetails();
//         return accDetails[acno1].bal;
//         }else{
//           alert("insufficient balance")
//           return false;

//         }
//       }
//       else{
//         alert('Password Incorrect');
//         return false;
//       }
//     }
//     else{
//       alert('Invalid accDetails')
//       return false;
//     }
  }
  getTransaction(acno:any){
  // return this.accDetails[acno].transaction
  const data={
    acno
  }
  return this.http.post('http://localhost:3000/transaction',data,this.getToken())

}
}
