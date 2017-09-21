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

  private form: FormGroup;
  constructor(private fb: FormBuilder, private logReg: LogRegService, private serv: PushService) { }

  ngOnInit() {
    this.form = this.fb.group({
      msg: ['', Validators.required],
      date: ['', Validators.required],
      time: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.form.invalid) {
      console.log('the form is invalid');
      return;
    }
    const item = new Item({
      userUID: this.logReg.userUID,
      msg: this.form.controls['msg'].value,
      date: this.form.controls['date'].value.toUTCString(),
      time: this.form.controls['time'].value,
    });
    console.log(item);
    this.serv.add(item);
    this.form.reset();
    console.log('The item added successfully');
  }
}
