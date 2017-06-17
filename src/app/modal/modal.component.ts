import { Component, OnInit, ViewChild, Input, Output, EventEmitter } from '@angular/core';
import { ModalDirective } from "ng2-bootstrap";

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {

  @ViewChild("lgModal") modalRef: ModalDirective;//Modalダイアログへの参照
  @Input() message;
  @Output() exec = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  public showModal(): void {
    this.modalRef.show();
  }

  public hideModal(): void {
    this.modalRef.hide();
  }

  execute() {
    this.exec.emit('test');
  }


}
