import { LogRegService } from './log-reg.service';
import { Injectable } from '@angular/core';

import { CanActivate, RouterStateSnapshot, ActivatedRouteSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class AuthGuard implements CanActivate {

    constructor(private service: LogRegService, private router: Router) {
    }
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | Observable<boolean> | Promise<boolean> {

        return this.service.isSignInStream.map<boolean, boolean>((isSignedIn: boolean) => {
            if (!isSignedIn) {
                this.router.navigate(['']);
            }
            return isSignedIn;
        });
    }
}
