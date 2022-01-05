import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { AccountService } from 'src/app/services/account.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  model: User = new User();

  constructor(private accService: AccountService, private router: Router) { }

  ngOnInit(): void {
  }

  login(){
   if(this.accService.login(this.model)){
     console.log(this.model)
     this.router.navigate(['shop']);
   }
   else{
     console.log('error');
   }
  
  }

}
