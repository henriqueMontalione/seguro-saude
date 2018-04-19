import { SeguradoEventService } from './../segurado/segurado-event.service';
import { Observable } from 'rxjs/Observable';
import { AuthService } from './auth.service';
import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router';

@Injectable()
export class AuthGuardService implements CanActivate {

  constructor(private router: Router, private authService: AuthService, private seguradoEventService: SeguradoEventService) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    if ( this.authService.isLoggedIn() ) {
        console.log('canActivate true');
        this.seguradoEventService.seguradoLogado.emit(true);    
        return true;
    }

    this.router.navigate(['/']);
    console.log('canActivate false');
    this.seguradoEventService.seguradoLogado.emit(false);        
    return false;
  }

}
