import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { User } from './model/user.model';

@Injectable({
  providedIn: 'root'
})
export class DataserviceService {
  
  constructor() { }
  
  UserData: User[] = [
    {
      id : 1,	
      email: "patsywaters@gmail.com",	
      firstName: "Patsy",	
      lastName: "Waters",
      role:"doctor",	
      status: "active"
    },
    {
      id : 2,	
      email: "nolan007@hotmail.com",	
      firstName: "Della",	
      lastName: "Nolan",
      role:"admin",	
      status: "inactive"
    },
    {
      id : 3,	
      email: "garry.hudson@yahoo.com",	
      firstName: "Gary",	
      lastName: "Hudson",
      role:"accountant",	
      status: "active"
    }
  ];
}
