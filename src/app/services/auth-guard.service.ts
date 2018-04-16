import { AuthService } from './auth.service';
import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';

@Injectable()
export class AuthGuardService implements CanActivate {

  constructor(private router: Router, private authService: AuthService) { }

  canActivate() {
    if ( this.authService.isLoggedIn() ) {
        console.log('canActivate true');
        return true;
    }

    this.router.navigate(['/']);
    console.log('canActivate false');
    return false;
  }

}
