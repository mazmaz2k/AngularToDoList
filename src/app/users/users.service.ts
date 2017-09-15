import { Users } from './../users';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { Injectable } from '@angular/core';

@Injectable()
export class UsersService {

  constructor(private db: AngularFireDatabase) {
   }

  addNewUser(user: Users, key: string) {
    this.db.object(`/users/${key}`).set(user);
  }

}