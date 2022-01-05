import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";
import { AccountService } from "src/app/services/account.service";

@Injectable()
export class LoginGuard implements CanActivate{
    constructor(private accService:AccountService, private router: Router){}

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
        let logged = this.accService.isLoggedIn();
        if(logged){
            return true;
        }
        this.router.navigate(["login"])
        return false;
    }
}