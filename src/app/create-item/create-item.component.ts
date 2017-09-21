import { PushService } from './../push/push.service';
import { LogRegService } from './../log-reg.service';
import { Item } from './../item';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-item',
  templateUrl: './create-item.component.html',
  styleUrls: ['./create-item.component.css']
})
export class CreateItemComponent implements OnInit {

  constructor(private fb: FormBuilder, private logReg: LogRegService, private serv: PushService) { }

  ngOnInit() {}

  onSubmit(form) {
     if (form.invalid || form.value.time === '' ||  form.value.time == null) {
       console.log('the form is invalid');
       return;
     }
     const item = new Item({
       userUID: this.logReg.userUID,
       msg: form.value.msg,
       date: form.value.date.toLocaleDateString('en-GB'),
       time: form.value.time.toLocaleTimeString('en-US', { hour12: false })
     });
     this.serv.add(item);
     form.reset();
     console.log('The item added successfully');
  }
}
