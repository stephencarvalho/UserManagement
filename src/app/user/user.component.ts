import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTable } from '@angular/material/table';
import { DataserviceService } from '../dataservice.service';
import { EditUserModalComponent } from '../edit-user-modal/edit-user-modal.component';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  
  @ViewChild(MatTable,{static:true}) table: MatTable<any>;
  
  totalUsers: number = 3;
  
  displayedColumns: string[] = [
    'id',
    'user',
    'role',
    'status',
    'edit-delete'
  ];

dataSource = this.dataService.UserData;

constructor(private dataService: DataserviceService,
  public dialog: MatDialog) { }
  
  ngOnInit(): void {
  }

  //open relevant dialog depending on the action button clicked
  openDialog(action,obj) {
    obj.action = action;
    const dialogRef = this.dialog.open(EditUserModalComponent, {
      width: '300px',
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
  
  //function to add a user to the datasource array and render rows to update the table
  addRowData(row_obj){
    var d = new Date();
    this.dataSource.push({
      id:this.getnextId(),
      email: row_obj.email,
      firstName: row_obj.firstName,
      lastName: row_obj.lastName,
      role: row_obj.role,
      status: row_obj.status,
      img: this.dataService.randomImage
    });
    this.table.renderRows();
    ++this.totalUsers;
    
  }

  //function to update a user object in the datasource array 
  updateRowData(row_obj){
    this.dataSource = this.dataSource.filter((value)=>{
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

  //function to delete a user from the datasource array and render rows to update the table
  deleteRowData(row_obj){
    let indexOfObject = this.dataSource.findIndex(o => o.id === row_obj.id);
    this.dataSource.splice(indexOfObject, 1);
    this.totalUsers--;
    this.table.renderRows();
  }
  
  //function to generate the next ID for a new user. 
  getnextId(): number {
    let highest = 0;
    this.dataService.UserData.forEach(function (item) {
      if (highest === 0) {
        highest = item.id;
      }
      if (highest < item.id) {
        highest = item.id;
      }
    });
    return highest + 1;
  }
  
}
