import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpHeaders, HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username:any;
  password:any;

  requestObject ={
    "username" : this.username,
    "password": this.password

  }
  constructor(private http : HttpClient, private router: Router) {
    
  }
  ngOnInit() {

  }
  login() {

    let header = new HttpHeaders();
    header.append('Content-Type', 'application/json');
    
     this.http
        .post("http://34.214.86.104/login",
        {"username":this.username,"password":this.password},
            {headers: header})
        .subscribe((res) => {
            //do something with the response here

            this.router.navigate(['./home']);


            console.log(res);
        });


        
    
    
  }
}