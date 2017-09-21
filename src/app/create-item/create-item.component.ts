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

  // private form: FormGroup;
  constructor(private fb: FormBuilder, private logReg: LogRegService, private serv: PushService) { }
  public myTime1: Date = new Date();
  ngOnInit() {
    // this.form = this.fb.group({
    //   msg: ['', Validators.required],
    //   date: ['', Validators.required],
    //   time: ['', Validators.required]
    // });
  }

  onSubmit(form) {
    console.log(form);
     if (form.invalid || form.value.time === '' ||  form.value.time == null) {
       console.log('the form is invalid');
       return;
     }
     const item = new Item({
       userUID: this.logReg.userUID,
       msg: form.value.msg,
       date: form.value.date.toLocaleDateString(),
       time: form.value.time.toLocaleTimeString()
     });
     console.log(form.value.time);
     this.serv.add(item);
     form.reset();
     console.log('The item added successfully');
  }
}
