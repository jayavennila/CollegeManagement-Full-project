import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
email:string;
password:string;
  constructor(private router: Router) { }

  ngOnInit() {
  }
logInUser(){
  if(this.email=="admin@gmail.com" && this.password =="12345"){
    console.log("Welcome to college dashboard")
  }
  else{
    console.log("Unauthorized user");
  }
  this.router.navigateByUrl('/employees');
}
}
