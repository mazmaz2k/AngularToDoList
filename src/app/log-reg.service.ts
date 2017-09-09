import { Injectable } from '@angular/core';

import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';

@Injectable()
export class LogRegService {

  private loggedIn = false;
   constructor(private af: AngularFireAuth) { }

   register(email, password) {
     return this.af.auth.createUserWithEmailAndPassword(email, password);
   }

   login(email, password) {
     const response = this.af.auth.signInWithEmailAndPassword(email, password);
     return response;
   }

   logout() {
     this.loggedIn = false;
   }

   changeStatus() {
     this.loggedIn = true;
   }

   get getStatus() {
     return this.loggedIn;
   }
}
