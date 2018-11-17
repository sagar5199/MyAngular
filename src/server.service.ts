import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Headers, Response, Http ,RequestOptions} from '@angular/http';
import { map } from 'rxjs/operators';
import { logging } from "protractor";
import { Alert } from "selenium-webdriver";
import { CookieService } from 'ngx-cookie-service';

@Injectable()
export class ServerService {

  constructor(private http: HttpClient, private hhtp1: Http,private cookieService: CookieService) { }
  onSave(otp: number,mobile:number) {
    alert(mobile+"services");
    var resultR;
    var body = mobile;
    var headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded');
    //http://13.126.217.228:8585/hellodox2/rest/outpatient/retrievePassword?mobile=7588175628&otp=3408
    return this.http.get('/api/hellodox2/rest/outpatient/retrievePassword?mobile='+mobile+'&otp=' + otp, {
      observe: 'body',
      responseType: 'json',
    })//.pipe(map((data:Response) => { return data}));

  }
  sendOTP(mobileNumber:number) {
    
    var body = `mobile=${mobileNumber}`;
    var headers = new HttpHeaders();
    headers.append('Content-Type', 'application/x-www-form-urlencoded');
    //http://13.126.217.228:8585/hellodox2/rest/outpatient/register
    return this.http.post("/api/hellodox2/rest/outpatient/sendOTP?", body, {
      observe: 'body',
      responseType: 'json',
      headers: new HttpHeaders().append('Content-Type', 'application/x-www-form-urlencoded')
    }).pipe(map((data:Response) => { return data}))

  }

  getlogin(password: string,mobile:number) {
    
    var headers = new Headers();
  
    headers.append('Content-Type', 'application/x-www-form-urlencoded');
    let options = new RequestOptions({ headers: headers, withCredentials: true});

    var username=mobile;
    var body=`loginrole=patient&username=${username}&password=${password}`


    return this.hhtp1
    .post('/api/hellodox2/login?', body, options)
    /* .subscribe(
        (response:Response) => {
        alert(JSON.stringify(response.headers));
    }, (err) => {
      alert('error'+err+"44444");
    }); */
     /* return this.http.post("/api/hellodox2/login?",body,{     
      observe: 'response',
       responseType: 'json',
        headers: new HttpHeaders().append('Content-Type', 'application/x-www-form-urlencoded')
      }) */
    

/* return this.hhtp1.post("http://13.126.217.228:8585/hellodox2/login?",body,{
  headers:new Headers({'Content-Type': 'application/x-www-form-urlencoded'})
}) */
  }

}

