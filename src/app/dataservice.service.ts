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
      id: 1,
      email: 'Mellie',
      firstName: 'Gabbott',
      lastName: 'mgabbott0@indiatimes.com',
      role: 'Female',
      status: 'Support'
    },
    {
      id: 2,
      email: 'Mellie',
      firstName: 'Gabbott',
      lastName: 'mgabbott0@indiatimes.com',
      role: 'Female',
      status: 'Support'
    },
  ];

  getUsers(): Observable<User[]> {
    let ids = this.UserData.map((obj)=> {
      console.log("objects="+obj);
      return obj;
    });
    let arr = [...ids];

    console.log(arr);
    return of(arr);
  }

  addUsers(): Observable<User[]>  {
    var test: User = {
      id: 3,
      email: 'abc@test.com',
      firstName: 'Jim',
      lastName: 'Rambo',
      role: 'Doctor',
      status: 'Active'
    };
    this.UserData.push(test);
    console.log("User Data"+this.UserData);
    let ids = this.UserData.map((obj)=> {
      console.log("objects="+obj);
      return obj;
    });
    let arr = [...ids];

    console.log(arr);
    return of(arr);
  }

  deleteUsers() {

  }

  editUsers() {

  }
  
}
