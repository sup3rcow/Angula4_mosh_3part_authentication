import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { AuthService } from 'app/services/auth.service';

@Injectable()
export class AdminAuthGuard implements CanActivate {

  constructor(private authService: AuthService, private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    let user = this.authService.currentUser;
    if (user && user.admin) { // ako user nije null i ima admin propery = true
      return true;
    }

    this.router.navigate(['/no-access']);
    return false;
  }
}
