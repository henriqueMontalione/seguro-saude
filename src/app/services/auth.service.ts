import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class AuthService {
  private user: Observable<firebase.User> = null;
  private userDetails: firebase.User = null;

  private email;

  constructor(private _firebaseAuth: AngularFireAuth, private router: Router) {
    this.user = this._firebaseAuth.authState;
    
    this.user.subscribe((user) => {
        if (user) {
          this.userDetails = user;
          console.log('Dados usuario:', this.userDetails);
          this.email = this.userDetails.email;
          console.log('this.Email --', this.email);
        } else {
            this.userDetails = null;
        }
      });
  }

  signInWithTwitter() {
    const provider = new firebase.auth.TwitterAuthProvider();
    return this.oAuthLogin(provider);
  }

  signInWithGoogle() {
    const provider = new firebase.auth.GoogleAuthProvider();
    return this.oAuthLogin(provider);
  }

  signInWithFacebook() {
    const provider = new firebase.auth.FacebookAuthProvider();
    return this.oAuthLogin(provider);
  }

  private oAuthLogin(provider) { return this._firebaseAuth.auth.signInWithPopup(provider); }

  signOut() {
    this._firebaseAuth.auth.signOut().then(() => {
        this.router.navigate(['/']);
    });
  }

  isLoggedIn() {
    if (this.userDetails == null ) {
        return false;
      } else {
        return true;
      }
    }
  
  logout() {
      this._firebaseAuth.auth.signOut()
      .then((res) => this.router.navigate(['/']));
    }

}
