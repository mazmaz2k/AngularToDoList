import { PushService } from './../push/push.service';
import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-show-all-tasks',
  templateUrl: './show-all-tasks.component.html',
  styleUrls: ['./show-all-tasks.component.css']
})
export class ShowAllTasksComponent implements OnInit {

  editable = false;
  constructor(private push: PushService, private router: Router) {
    this.router.events.subscribe(event => {
      if ((<NavigationEnd>event).url === '/list/showall/edit') {
        this.editable = true;
      } else {
        this.editable = false;
      }
    });
  }

  ngOnInit() {
  }

}
