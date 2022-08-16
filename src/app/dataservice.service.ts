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

  // addUsers(): Observable<User[]>  {
  //   var test: User = {
  //     id: 3,
  //     email: 'abc@test.com',
  //     firstName: 'Jim',
  //     lastName: 'Rambo',
  //     role: 'Doctor',
  //     status: 'Active'
  //   };
  //   this.UserData.push(test);
  //   let ids = this.UserData.map((obj)=> {
  //     return obj;
  //   });
  //   return of(ids);
  // }

}
