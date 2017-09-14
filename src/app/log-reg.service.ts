import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';

import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';

@Injectable()
export class LogRegService {

  public userUID: string;
  public isSignInStream: Observable<boolean>;
  constructor(private af: AngularFireAuth) {
    this.isSignInStream = this.af.authState.map<firebase.User, boolean>((user: firebase.User) => {
      this.userUID = user && user.uid;
      return user != null;
    });
  }

   register(email, password) {
     return this.af.auth.createUserWithEmailAndPassword(email, password);
   }

   login(email, password) {
     return this.af.auth.signInWithEmailAndPassword(email, password);
   }

   logout() {
     this.af.auth.signOut();
   }
}
