import { Component, OnInit } from '@angular/core';
import {AdminQueriesService} from '../_services/admin-queries.service';

@Component({
  selector: 'app-board-admin-insert-gym',
  templateUrl: './board-admin-insert-gym.component.html',
  styleUrls: ['./board-admin-insert-gym.component.css']
})
export class BoardAdminInsertGymComponent implements OnInit {
  form: any ={
    city:null,
    gym:null    
  };
  errorMessage = '';
  isSuccessful = false;
  dataArray: any = [];

  constructor(private adminQueries: AdminQueriesService) { }

  ngOnInit(): void {
    this.adminQueries.getCities().subscribe(
      data=>{
        console.log(data);
          this.dataArray=data as string[];
          console.log(this.dataArray);
      },
      err=>{
        this.errorMessage=err.error.message;
        console.log(err);
      }
    );
  }

  onSubmit(): void{
    const { gym, city } = this.form; 
    console.log("did", city, gym)

    this.adminQueries.insertgym(gym, city).subscribe(
      data=>{
        console.log(data);  
        this.isSuccessful = true;
      },
      err => {
        this.errorMessage=err.error.message;
      }
    );
  }

}
