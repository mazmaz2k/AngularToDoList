import { LogRegService } from './../log-reg.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  constructor(private logReg: LogRegService) { }

  ngOnInit() {
  }

  register() {
    this.logReg.register();
  }

}
