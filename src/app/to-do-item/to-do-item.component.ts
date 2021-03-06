import { Component, OnInit, Input, TemplateRef } from '@angular/core';
import { PushService } from '../push/push.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/modal-options.class';
import { ModalContentComponent } from '../modal-content/modal-content.component';
import { Item } from '../item';
import { LogRegService } from './../log-reg.service';


@Component({
  selector: 'app-to-do-item',
  templateUrl: './to-do-item.component.html',
  styleUrls: ['./to-do-item.component.css']
})
export class ToDoItemComponent implements OnInit {

   @Input() item;
   modalRef: BsModalRef;
   _bsValue: Date;
   minDate: Date = new Date();
   constructor(private push: PushService,
               private router: Router,
               private route: ActivatedRoute,
               private modalService: BsModalService,
               private logReg: LogRegService) { }

   ngOnInit() {
   }

  //  get bsValue(): Date {
  //    return this._bsValue;
  //  }
  //  set bsValue(v: Date) {
  //    console.log(v);
  //    this._bsValue = v;
  //  }
   del(item) {
     this.modalRef.hide();
     this.push.delete(item);
   }

   edit(item: Item) {
    const temp = ('' + item.date).split('/');
    // console.log(temp);
    const temp1 = temp[2] + '/' + temp[1] + '/' + temp[0];
    this._bsValue = new Date(temp1);
    // console.log(item.date);
    item.isEditable = true;
   }

   public openModal(template: TemplateRef<any>) {
     this.modalRef = this.modalService.show(template);
   }

   cancel(item) {
     item.isEditable = false;
   }

   save(form, exItem) {
    if (form.invalid) {
      return;
    }

    const date: Date = this.getDateTime(form.value.date, form.value.time);
    const item = new Item({
      userUID: this.logReg.userUID,
      msg: form.value.msg,
      date: date.toLocaleDateString('en-GB'),
      time: date.toLocaleTimeString('en-US', { hour12: false, hour: '2-digit', minute: '2-digit' }),
      toSec: date.getTime()
    });
      this.push.delete(exItem);
      this.push.add(item);
   }

   getDateTime(date ,time: string): Date {
    const arr = time.split(':');
    return new Date(date.getFullYear(), date.getMonth(), date.getDate(), +arr[0], +arr[1]);
   }
   debug(form) {
     console.log(form.controls['time'].invalid);
   }
}
