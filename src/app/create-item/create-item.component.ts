import { PushService } from './../push/push.service';
import { LogRegService } from './../log-reg.service';
import { Item } from './../item';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
// import { TimepickerModule } from 'ngx-bootstrap/timepicker';
import { TimepickerModule } from 'ngx-bootstrap';
@Component({
  selector: 'app-create-item',
  templateUrl: './create-item.component.html',
  styleUrls: ['./create-item.component.css']
})
export class CreateItemComponent implements OnInit {

  constructor(private fb: FormBuilder, private logReg: LogRegService, private serv: PushService) { }

  private _time = new Date();
  ngOnInit() {}

  onSubmit(form) {
     if (form.invalid || form.value.time === '' ||  form.value.time == null) {
       console.log('time', form.value.time);
       console.log('the form is invalid');
       return;
     }
     const item = new Item({
       userUID: this.logReg.userUID,
       msg: form.value.msg,
       date: form.value.date.toLocaleDateString('en-GB'),
       time: form.value.time.toLocaleTimeString('en-US', { hour12: false, hour: '2-digit', minute: '2-digit' })
     });
     this.serv.add(item);
     form.reset();
     console.log('The item added successfully');
  }

  get time() {
    return this._time;
  }
}
