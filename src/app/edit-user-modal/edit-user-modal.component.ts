import { Component, Inject, OnInit, Optional } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DataserviceService } from '../dataservice.service';
import { Select } from '../model/select.model';
import { User } from '../model/user.model';
import { UserComponent } from '../user/user.component';

@Component({
  selector: 'app-edit-user-modal',
  templateUrl: './edit-user-modal.component.html',
  styleUrls: ['./edit-user-modal.component.css']
})
export class EditUserModalComponent implements OnInit {
  
  action:string;
  local_data:any;
  email:string;
  
  roles: Select[] = [
    {value: 'accountant', label: 'Accountant'},
    {value: 'admin', label: 'Admin'},
    {value: 'doctor', label: 'Doctor'}
  ];
  
  statusOptions: Select[] = [
    {value: 'active', label: 'Active'},
    {value: 'inactive', label: 'Inactive'}
  ];
  
  constructor(
    private dataService: DataserviceService,
    public dialogRef: MatDialogRef<EditUserModalComponent>,
    //@Optional() is used to prevent error if no data is passed
    @Optional() @Inject(MAT_DIALOG_DATA) public data: User) {
      console.log(data);
      this.local_data = {...data};
      this.action = this.local_data.action;
    }
    
    doAction(){
      this.dialogRef.close({event:this.action,data:this.local_data});
    }
    
    closeDialog(){
      this.dialogRef.close({event:'Cancel'});
    }
    
    checkEmail(event: any) {
      this.email = event.target.value;
      this.dataService.UserData.find((obj) => {
        return obj.email === this.email;
      });
    }
    
    ngOnInit(): void {
    }
    
  }
  