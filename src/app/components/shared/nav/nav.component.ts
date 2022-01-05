import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AccountService } from 'src/app/services/account.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  constructor(private accService:AccountService, private router: Router){}

  isLoggedIn(){
    return this.accService.isLoggedIn();
}

logout(){
  this.accService.logout();
  this.router.navigate(['products']);
}

  ngOnInit(): void {
  }

}
