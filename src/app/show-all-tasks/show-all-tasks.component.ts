import { PushService } from './../push/push.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-show-all-tasks',
  templateUrl: './show-all-tasks.component.html',
  styleUrls: ['./show-all-tasks.component.css']
})
export class ShowAllTasksComponent implements OnInit {

  constructor(private push: PushService) { }

  ngOnInit() {
  }

}
