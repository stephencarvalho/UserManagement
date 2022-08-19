import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { User } from './model/user.model';

@Injectable({
  providedIn: 'root'
})
export class DataserviceService {
  
  constructor() { }

  imgArray = ["../assets/img/girl1.png",
  "../assets/img/girl2.png",
  "../assets/img/girl3.png",
  "../assets/img/man1.png",
  "../assets/img/man2.png",
  "../assets/img/man3.png",
  "../assets/img/man4.png"
];
  
  UserData: User[] = [
    {
      id : 1,	
      email: "patsywaters@gmail.com",	
      firstName: "Patsy",	
      lastName: "Waters",
      role:"doctor",	
      status: "active",
      img: this.randomImage
    },
    {
      id : 2,	
      email: "nolan007@hotmail.com",	
      firstName: "Della",	
      lastName: "Nolan",
      role:"admin",	
      status: "inactive",
      img: this.randomImage
    },
    {
      id : 3,	
      email: "garry.hudson@yahoo.com",	
      firstName: "Gary",	
      lastName: "Hudson",
      role:"accountant",	
      status: "active",
      img: this.randomImage
    }
  ];
  
get randomImage() {
  return this.imgArray[Math.floor(Math.random()*this.imgArray.length)];
}
}
