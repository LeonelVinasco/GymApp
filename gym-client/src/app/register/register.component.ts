import { Component, OnInit } from '@angular/core';
import { AuthService } from '../_services/auth.service';
import {AdminQueriesService} from '../_services/admin-queries.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  form: any = {
    username: null,
    email: null,
    password: null,
    gym:null
  };
  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';
  dataArray: any = [];

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    this.authService.getGyms().subscribe(
      data=>{
        console.log(data);
        this.dataArray=data as string[];
        console.log(this.dataArray);
      },
      err=>{
        this.errorMessage=err.error.message;
      }
    );
  }

  onSubmit(): void {
    const { username, email, password, gym } = this.form;
    const admin=false;
    this.authService.register(username, email, password, gym, admin).subscribe(
      data => {
        console.log(data);
        this.isSuccessful = true;
        this.isSignUpFailed = false;
      },
      err => {
        this.errorMessage = err.error.message;
        this.isSignUpFailed = true;
      }
    );
  }

}
