import { UsersService } from './users/users.service';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';

import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';

@Injectable()
export class LogRegService {

  public userUID: string;

  public isSignInStream: Observable<boolean>;
  constructor(private af: AngularFireAuth , private us: UsersService) {
    this.isSignInStream = this.af.authState.map<firebase.User, boolean>((user: firebase.User) => {
      this.userUID = user && user.uid;
      return user != null;
    });
  }

   register(email, password) {
   // this.us.setLogIn(true, this.userUID);
     return this.af.auth.createUserWithEmailAndPassword(email, password);
   }

   login(email, password) {
    // this.us.setLogIn(true, this.userUID);
     return this.af.auth.signInWithEmailAndPassword(email, password);
   }

   logout() {
    this.us.setLogIn(false, this.userUID);
     this.af.auth.signOut();
   }
}
