import { Injectable } from '@angular/core';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class AccountService {
  constructor() { }
  loggedIn = false;
  login(user:User):boolean
  {
    if(user.username=='admin'&& user.password == "123456")
    {
      this.loggedIn = true;
      localStorage.setItem("isLogged", user.username);
      return true;
    }
    return false;
  }

  isLoggedIn(){
    return this.loggedIn;
  }

  logout(){
    this.loggedIn = false;
    localStorage.removeItem('isLogged');    
  }
}
