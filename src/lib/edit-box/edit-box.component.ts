import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'bn-edit-box',
  templateUrl: './edit-box.component.html',
  styleUrls: ['./edit-box.component.css']
})
export class EditBoxComponent implements OnInit {
  @Input() node: any;
  @Output() edited = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  update() {
    this.edited.emit(this.node);
  }

  onClick(e) {
    e.stopPropagation();
  }

}
