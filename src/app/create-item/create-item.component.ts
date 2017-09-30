import { PushService } from './../push/push.service';
import { LogRegService } from './../log-reg.service';
import { Item } from './../item';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
// import { TimepickerModule } from 'ngx-bootstrap/timepicker';
import { TimepickerModule } from 'ngx-bootstrap';
import { Router } from '@angular/router';
@Component({
  selector: 'app-create-item',
  templateUrl: './create-item.component.html',
  styleUrls: ['./create-item.component.css']
})
export class CreateItemComponent implements OnInit {

  private minDate = new Date();
  private _time = new Date();
  
  constructor(private fb: FormBuilder, private logReg: LogRegService, private serv: PushService, private router: Router) { }

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
       time: form.value.time.toLocaleTimeString('en-US', { hour12: false, hour: '2-digit', minute: '2-digit' }),
       toSec: new Date(form.value.date.getFullYear(), form.value.date.getMonth(), form.value.date.getDate(), form.value.time.getHours(), form.value.time.getMinutes()).getTime(),
      });
     this.serv.add(item);
     form.reset();
     console.log('The item added successfully');
     this.router.navigate(['/list/showall']);
  }

  get time() {
    return this._time;
  }
}
