import { LogRegService } from './../log-reg.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  constructor(private service: LogRegService) { }

  ngOnInit() {
  }

  logout() {
    this.service.logout();
  }

}
