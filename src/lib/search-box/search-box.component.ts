import { Component, OnInit, Output ,EventEmitter } from '@angular/core';

@Component({
  selector: 'bn-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.css']
})
export class SearchBoxComponent implements OnInit {
  @Output() onChange = new EventEmitter;
  searchText;

  constructor() { }

  ngOnInit() {
  }

  search() {
    this.onChange.emit(this.searchText);
  }

}
