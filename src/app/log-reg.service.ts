import { Injectable } from '@angular/core';

import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';

@Injectable()
export class LogRegService {

   constructor(private af: AngularFireAuth) { }

   register() {
     this.af.auth.createUserWithEmailAndPassword('test@test.com', '123456');
   }

   login() {
     this.af.auth.signInWithEmailAndPassword('t@test.com', '123456');
   }
}
