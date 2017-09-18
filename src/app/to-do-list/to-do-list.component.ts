import { LogRegService } from './../log-reg.service';
import { UsersService } from './../users/users.service';
import { PushService } from './../push/push.service';
import { Observable } from 'rxjs/Observable';
import { ActivatedRoute, Router, Params, NavigationEnd } from '@angular/router';
import { Component } from '@angular/core';
import { trigger, state, style, transition, animate, keyframes } from '@angular/animations';
import { Users } from '../users';

@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.css'],
  // animations: [
  //   trigger('flyInOut', [
  //     state('in', style({transform: 'translateX(100%)', opacity: 0.5})),
  //     transition('void => *', [
  //       animate(3000, keyframes([
  //         style({opacity: 0, transform: 'translateX(-100%)', offset: 0}),
  //         style({opacity: 1, transform: 'translateX(15px)',  offset: 0.3}),
  //         style({opacity: .5, transform: 'translateX(100%)',     offset: 1.0})
  //       ]))
  //     ])
  //   ])
  // ]
})
export class ToDoListComponent {

  private showHelloMsg: boolean;
  private _user: Observable<any>;
  private name;

  constructor(private router: Router, private route: ActivatedRoute, private userServ: UsersService, private logreg: LogRegService) {
    this.userServ.getUserData(this.logreg.userUID);
    this.router.events.subscribe(event => {
      if ((<NavigationEnd>event).url === '/list') {
        this.showHelloMsg = true;
      } else {
        this.showHelloMsg = false;
      }
    });
    this._user = this.userServ.userData;
      this._user.subscribe(user => {
        this.name = user._firstName;
      });
   }

  get user(){
    return this._user;
  }
}
