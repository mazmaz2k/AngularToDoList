import { Component, OnInit, Input, TemplateRef } from '@angular/core';
import { PushService } from '../push/push.service';
import { Router, ActivatedRoute } from '@angular/router';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/modal-options.class';
import { ModalContentComponent } from '../modal-content/modal-content.component';

@Component({
  selector: 'app-to-do-item',
  templateUrl: './to-do-item.component.html',
  styleUrls: ['./to-do-item.component.css']
})
export class ToDoItemComponent implements OnInit {

  @Input() item;
  modalRef: BsModalRef;

  constructor(private push: PushService,
              private router: Router,
              private route: ActivatedRoute,
              private modalService: BsModalService) { }

  ngOnInit() {
  }

  del(item) {
    this.modalRef.hide();
    this.push.delete(item);
  }

  edit(item) {
    this.router.navigate(['edit'], {relativeTo: this.route});
  }

  public openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }
}
