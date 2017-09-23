import { PushService } from './../push/push.service';
import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { FirebaseListObservable } from 'angularfire2/database';
import { element } from 'protractor';
import { ToDoListComponent } from './../to-do-list/to-do-list.component';
import { ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { UsersService } from './../users/users.service';
import { LogRegService } from './../log-reg.service';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Users } from '../users';
import { Item } from './../item';
import { Input, TemplateRef } from '@angular/core';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/modal-options.class';
import { ModalContentComponent } from '../modal-content/modal-content.component';


@Component({
  selector: 'app-edit-item',
  templateUrl: './edit-item.component.html',
  styleUrls: ['./edit-item.component.css']
})
export class EditItemComponent implements OnInit {

  item1: Item;
  constructor(private fb: FormBuilder, private logReg: LogRegService, private serv: PushService, private router: ActivatedRoute) {
    this.router.queryParams.subscribe(params => {
      this.item1 = params['item'];
       console.log(params);
    });


    console.log(this.item1);
  }

  ngOnInit() {

  }
  update(form) {
    if (form.invalid || form.value.time === '' || form.value.time == null) {
      console.log('the form is invalid');
      return;
    }

    const item = new Item({
      userUID: this.logReg.userUID,
      msg: form.value.msg,
      date: form.value.date.toLocaleDateString('en-GB'),
      time: form.value.time.toLocaleTimeString('en-US', { hour12: false })
    });
    // this.serv.delete(this.item);
    this.serv.add(item);
    form.reset();
    console.log('The item added successfully');
  }


}
