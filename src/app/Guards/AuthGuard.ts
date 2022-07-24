import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";
import { IAuthService } from "../Services/AuthService";



@Injectable({providedIn : "root"})
export class AuthGuard implements CanActivate
{
    
    setRedirectUrl(redirectUrl : string)
    {
        this.isRedirectUrlExist = true;
        this._redirectUrl = redirectUrl;
    }

    isRedirectUrlExist = false;
    private _redirectUrl = "";

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
        if(this.authService.IsLoggedIn())
        {
            return true;
        }

        if(this.isRedirectUrlExist)
        {
            this.router.navigateByUrl("/auth?return="+this._redirectUrl);
        }
        else
        {
            this.router.navigateByUrl("/auth");
        }

        return false;
    }

    constructor(private authService : IAuthService, private router : Router){}

}