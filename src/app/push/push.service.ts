import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { LogRegService } from '../log-reg.service';

@Injectable()
export class PushService {

  public items: FirebaseListObservable<any[]>;
  readonly path: string = 'items';

  constructor(private db: AngularFireDatabase, private logreg: LogRegService) {
    this.logreg.isSignInStream.subscribe(() => {
      this.items = this.db.list(`${this.path}/${this.logreg.userUID}`);
    });
  }
  add(obj) {
    this.items.push(obj);
  }

  delete(obj) {
    this.items.remove(obj);
  }

  isEmpty() {

  }
}
