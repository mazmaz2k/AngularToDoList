import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Injectable()
export class PushService {

  public items: FirebaseListObservable<any[]>;
  readonly path: string = 'items';

  constructor(private db: AngularFireDatabase) {
    this.items = this.db.list(this.path);
  }
  add(obj) {
    this.items.push(obj);
  }

  delete(obj) {
    this.items.remove(obj);
  }

}
