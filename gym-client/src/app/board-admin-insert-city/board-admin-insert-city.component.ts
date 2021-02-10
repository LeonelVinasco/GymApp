import { Component, OnInit } from '@angular/core';
import {AdminQueriesService} from '../_services/admin-queries.service';

@Component({
  selector: 'app-board-admin-insert-city',
  templateUrl: './board-admin-insert-city.component.html',
  styleUrls: ['./board-admin-insert-city.component.css']
})
export class BoardAdminInsertCityComponent implements OnInit {
  form: any = {
    city: null
  };
  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';

  constructor(private adminQueries: AdminQueriesService ) { }

  ngOnInit(): void {
  }
  
  onSubmit(): void{
    const { city } = this.form; 
    console.log("did", city)

    this.adminQueries.insertcity(city).subscribe(
      data=>{
        console.log(data);  
        this.isSuccessful = true;
        this.isSignUpFailed = false;
      },
      err => {
        this.errorMessage=err.error.message;
      }
    );
  }
}
