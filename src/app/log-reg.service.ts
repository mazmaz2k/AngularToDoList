import { Injectable } from '@angular/core';

import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';

@Injectable()
export class LogRegService {

   constructor(private af: AngularFireAuth) { }

   register(email, password) {
     return this.af.auth.createUserWithEmailAndPassword(email, password);
   }

   login(email, password) {
     return this.af.auth.signInWithEmailAndPassword(email, password);
   }
}
