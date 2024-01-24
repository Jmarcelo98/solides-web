import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, CanActivateChild, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { TokenStorageService } from "./token-storage.service";
import { JwtHelperService } from "@auth0/angular-jwt";
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class AuthGuardService implements CanActivate, CanActivateChild {

    constructor(private tokenStorageService: TokenStorageService,
        private router: Router, private jwtHelperService: JwtHelperService) { }


    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):
        boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
     
        if (!this.isUsuarioAuthenticated() || this.isTokenExpired()) {
            this.router.navigate(['/login'])
            return false;
        }

        return true;
    }

    canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot):
        boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {

        if (this.isUsuarioAuthenticated()) {
            this.router.navigate([''])
            return true;
        }

        return false;
    }

    isUsuarioAuthenticated(): boolean {

        const token = this.tokenStorageService.getToken();

        if (!token) {
            return false;
        }

        return true;

    }

    isTokenExpired(): boolean {
        const token = this.tokenStorageService.getToken();
        return this.jwtHelperService.isTokenExpired(token);
    }


}