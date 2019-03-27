import { Injectable } from "@angular/core";
import { User } from "../models/User";
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: "root"
})
export class UserService {
  user: User = {
    id: "1",
    userName: "Janith",
    fname: "Janith",
    lname: "Herath",
    description: "I am a fresh graduate",
    position: "Software Engineer",
    aboutme: "ABC",
    contacts: ["0718934267", "0768945326"],
    address: {
      no: "18/04A",
      street: "lewallagama",
      city: "Kandy"
    },
    email: "janithHerath@gmail.com"
  };
  constructor(private httpClient:HttpClient) {}
  getUser(id: string): User {
      this.getUserFromAPI().subscribe(posts=>{
          console.log(posts)
      });
    return this.user;
  }
  updateUser(user: User): User {
    this.user = user;
    return user;
  }

  getUserFromAPI():Observable<any>{
      const user=this.httpClient.get('https://jsonplaceholder.typicode.com/posts');
      return user;
  }
}
