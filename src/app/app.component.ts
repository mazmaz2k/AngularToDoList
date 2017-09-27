import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { MessagingService } from './messaging.service';
import { BsModalRef, BsModalService } from 'ngx-bootstrap';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  message = null;
  @ViewChild('template') template;
  modalRef: BsModalRef;
  constructor(private msgService: MessagingService, private modalService: BsModalService) {}
  ngOnInit() {
    this.msgService.getPermission();
    this.msgService.receiveMessage();
    this.message = this.msgService.currentMessage.subscribe((x) => {
      if (!x) {
        return;
      }
      this.message = x.notification.body;
      console.log(this.message);
      this.openModal(this.template);
    });
  }

  public openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }
}
