import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.css']
})
export class ToDoListComponent implements OnInit {

  private userName = 'Alex';
  private items = ['1', '2', '3', '4'];
  constructor() { }

  ngOnInit() {
  }

}
