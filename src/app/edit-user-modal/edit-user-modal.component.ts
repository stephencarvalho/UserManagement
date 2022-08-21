import { Component, Inject, OnInit, Optional, ViewChild } from '@angular/core';
import { NgForm} from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DataserviceService } from '../dataservice.service';
import { Select } from '../model/select.model';
import { User } from '../model/user.model';

@Component({
  selector: 'app-edit-user-modal',
  templateUrl: './edit-user-modal.component.html',
  styleUrls: ['./edit-user-modal.component.scss']
})
export class EditUserModalComponent implements OnInit {
  @ViewChild('userForm', {static: false}) userForm: NgForm;
  action:string;
  local_data:any;
  email:string;
  emailExists: boolean;
  
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
      this.local_data = {...data};
      this.action = this.local_data.action;
    }
    
    //Submit function that sends the action being performed along with the data to the user component
    doAction(){
      this.dialogRef.close({event:this.action,data:this.local_data});
    }
    
    //close modal
    closeDialog(){
      this.dialogRef.close({event:'Cancel'});
    }
    
    //function to check if email exist
    //@param {any} event
    //Sets the value of emailExists to true if match is found else false
    checkEmail(event: any) {
      this.email = event.target.value;
      this.emailExists = this.dataService.UserData.some((obj) => obj.email === this.email);
    }
    
    ngOnInit(): void {
    }
    
  }
  