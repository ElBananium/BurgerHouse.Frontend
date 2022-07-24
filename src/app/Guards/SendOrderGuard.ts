import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";
import { IAuthService } from "../Services/AuthService";
import { AuthGuard } from "./AuthGuard";




@Injectable({providedIn : "root"})
export class SendOrderGuard implements CanActivate
{
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
        
        
        this.authGuard.setRedirectUrl("sendOrder");

        return this.authGuard.canActivate(route,state);
    }
    

    constructor(private authGuard : AuthGuard) {
        
    }
}