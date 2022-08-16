import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { DataserviceService } from '../dataservice.service';
import { User } from '../model/user.model';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  displayedColumns: string[] = [
    'id',
    'email',
    'firstName',
    'role',
    'status',
    'edit-delete'
  ];

  

  dataSource = new MatTableDataSource<User>(this.dataService.UserData);
  // refresh() {
  //   this.dataService.addUsers().subscribe((data: User[]) => {
  //     this.dataSource.data = data;
  //   });
  // }

  constructor(private dataService: DataserviceService) { }

  ngOnInit(): void {
  }

  ngOnChanges(): void {
    // this.dataService.addUsers().subscribe((data: User[]) => {
    //   this.dataSource.data = data;
    // });
  }

  onEmpCreate(){
    this.dataService.addUsers().subscribe((data: User[]) => {
      this.dataSource.data = data;
    });

    
  }

}
