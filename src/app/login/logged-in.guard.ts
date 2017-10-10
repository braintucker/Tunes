import { CanActivate,
         ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

export class LoggedInGuard implements CanActivate {

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        console.log('intercepted:', state.url);
        return true;
    }
}
