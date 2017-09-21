import { Component, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap';

@Component({
  selector: 'app-modal-content',
  templateUrl: './modal-content.component.html',
  styleUrls: ['./modal-content.component.css']
})
export class ModalContentComponent implements OnInit {

  public title: string;
  public list: any[] = [];
  constructor(public bsModalRef: BsModalRef) {}

  ngOnInit(): void {}
}

