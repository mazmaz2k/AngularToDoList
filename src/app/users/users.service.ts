import { Validators } from '@angular/forms';
import { Users } from './../users';
import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database';
import { Injectable } from '@angular/core';

@Injectable()
export class UsersService {

  public userData;
  constructor(private db: AngularFireDatabase) {}

  addNewUser(user: Users, key: string) {
    this.db.object(`/users/${key}`).set(user);
  }

  getUserData(key: string) {
     this.userData = this.db.object(`/users/${key}`);
  }

  setUserData(user: Users, key: string) {
    this.db.object(`/users/${key}`).set(user);
  }
}
