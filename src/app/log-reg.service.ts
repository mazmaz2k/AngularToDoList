import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';

import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';

@Injectable()
export class LogRegService {

  private loggedIn = false;
  constructor(private af: AngularFireAuth) {
    this.af.auth.onAuthStateChanged((account) => {
      this.loggedIn = account !== null ? true : false;
    });
  }

   register(email, password) {
     return this.af.auth.createUserWithEmailAndPassword(email, password);
   }

   login(email, password) {
     return this.af.auth.signInWithEmailAndPassword(email, password);
   }

   isLoggedIn() {
     return this.loggedIn;
   }

   logout() {
     this.af.auth.signOut();
   }
}
