import { PushService } from './../push/push.service';
import { Observable } from 'rxjs/Observable';
import { ActivatedRoute, Router, Params, NavigationEnd } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate, keyframes } from '@angular/animations';

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
export class ToDoListComponent implements OnInit {

  private showHelloMsg: boolean;
  constructor(private router: Router, private route: ActivatedRoute) {
    this.router.events.subscribe(event => {
      if ((<NavigationEnd>event).url === '/list') {
        this.showHelloMsg = true;
      } else {
        this.showHelloMsg = false;
      }
    });
   }

  ngOnInit() {}
}
