import { LogRegService } from './log-reg.service';
import { Injectable } from '@angular/core';

import { CanActivate, RouterStateSnapshot, ActivatedRouteSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class AuthGuard implements CanActivate {

    constructor(private service: LogRegService, private router: Router) {
    }
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | Observable<boolean> | Promise<boolean> {
        if (this.service.isLoggedIn()) {
            console.log(this.service.isLoggedIn());
            return true;
        } else {
            console.log(this.service.isLoggedIn());
            this.router.navigate(['']);
            return false;
        }
    }
}
