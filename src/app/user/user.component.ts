import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { DataserviceService } from '../dataservice.service';
import { EditUserModalComponent } from '../edit-user-modal/edit-user-modal.component';
import { User } from '../model/user.model';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  @ViewChild(MatTable,{static:true}) table: MatTable<any>;

  displayedColumns: string[] = [
    'id',
    'email',
    'firstName',
    'role',
    'status',
    'edit-delete'
  ];

  
  dataSource = this.dataService.UserData;

  constructor(private dataService: DataserviceService,
    public dialog: MatDialog) { }
  
  

  ngOnInit(): void {
  }
  openDialog(action,obj) {
    obj.action = action;
    const dialogRef = this.dialog.open(EditUserModalComponent, {
      width: '250px',
      data:obj
    });

    dialogRef.afterClosed().subscribe(result => {
      if(result.event == 'Add'){
        this.addRowData(result.data);
      }else if(result.event == 'Update'){
        this.updateRowData(result.data);
      }else if(result.event == 'Delete'){
        this.deleteRowData(result.data);
      }
    });
  }

  addRowData(row_obj){
    var d = new Date();
    this.dataSource.push({
      id:d.getTime(),
      email: row_obj.email,
      firstName: row_obj.firstName,
      lastName: row_obj.lastName,
      role: row_obj.role,
      status: row_obj.status
    });
    this.table.renderRows();
    
  }
  updateRowData(row_obj){
    this.dataSource = this.dataSource.filter((value,key)=>{
      if(value.id == row_obj.id){
        value.email = row_obj.email;
        value.firstName = row_obj.firstName;
        value.lastName = row_obj.lastName;
        value.role = row_obj.role;
        value.status = row_obj.status;
      }
      return true;
    });
  }
  deleteRowData(row_obj){
    this.dataSource = this.dataSource.filter((value,key)=>{
      return value.id != row_obj.id;
    });
  }

}
