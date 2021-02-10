import { Component, OnInit } from '@angular/core';
import { CombineLatestOperator } from 'rxjs/internal/observable/combineLatest';
import {AdminQueriesService} from '../_services/admin-queries.service';

@Component({
  selector: 'app-board-admin-list-users',
  templateUrl: './board-admin-list-users.component.html',
  styleUrls: ['./board-admin-list-users.component.css']
})
export class BoardAdminListUsersComponent implements OnInit {
  form: any ={
    gym:null    
  };
  errorMessage = '';
  isSuccessful = false;
  dataArray: any = [];
  userList: any = [];
  showTable=false;
  constructor(private adminQueries: AdminQueriesService) { }

  ngOnInit(): void {
    this.adminQueries.getGyms().subscribe(
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

  onSubmit(): void{
    const { gym} = this.form; 
    console.log("did", gym);
    this.adminQueries.listusers(gym).subscribe(
      list=>{
        this.userList=list as string[];
        this.showTable=true;
        console.log(this.userList)
      }, 
      err=>{
        this.errorMessage=err.error.message;
      }
    );


  }

}
