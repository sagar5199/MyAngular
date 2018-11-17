import { Component } from '@angular/core';
import { Http,Response} from '@angular/http';
import { ServerService } from '../server.service';
import { AlertPromise } from 'selenium-webdriver';
import { stringify } from '@angular/core/src/render3/util';
import { HttpEvent } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'recipe-book';
  value:number=5;
  loadedFeature='';
  data={mobile:7588175628};
  resp:any;
  otp:number;
  password:string="";
  result
  otpSendSuccessFully=false;
  Error:string="";
  mobileNum:number;
  
  constructor(private http:Http,private serverService:ServerService){}
  /* onNavigate(feature:string)
  {
   
        this.loadedFeature=feature;
  }
  onScroll(event) {
    //console.log('scroll event', event);
    alert('hi');
    
  } */
mydata:any
sendOTP(mobileNumber:number)
{
  this.mobileNum=mobileNumber;
   this.serverService.sendOTP(mobileNumber).subscribe((response) => {
     var result=JSON.stringify(response)
     alert(result)
     alert(result['account'])
   this.otpSendSuccessFully=true
}, error => {
  alert(error+"ok");
  console.log("error"+JSON.stringify(error));
}); 

}


getPassword()
  {
    alert(this.mobileNum+"component");
this.serverService.onSave(this.otp,this.mobileNum).subscribe((data)=>{
//var result= JSON.parse(JSON.stringify(data))
alert(JSON.stringify(data));
if(data['status']=='Success')
    {
      this.password=data['password'];
    
      this.showPasword();
    
    }
    else
    {
   
    this.Error= data['cause'];
    
    }
},
(error)=>{
alert(JSON.stringify(error))
})
}

showPasword()
{
this.serverService.getlogin(this.password,this.mobileNum).subscribe(
  (response:Response) => {
  alert(JSON.stringify(response.headers));
  this.showCokies();
  alert(sessionStorage.getItem("JSESSIONID"))
}, (err) => {
alert('error'+err+"44444");
}); 
  
  
  /* .subscribe(
   ( data)=>{
     this.result=data
     if(data!=null)
     {alert('login successfully')}
     else
     alert('login successfully')
    });  
} */
}
showCokies()
{

}
}
