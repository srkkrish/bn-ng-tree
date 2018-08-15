import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { BnNgTreeService } from './bn-ng-tree.service';
import { Observable } from 'rxjs/internal/Observable';


@Component({
  selector: 'bn-ng-tree',
  templateUrl: './bn-ng-tree.component.html',
 styleUrls: ['./bn-ng-tree.component.css']
})
export class BnNgTreeComponent implements OnInit {
  @Input() items;
  @Input() theme: string = "default";
  @Input() isSearch:boolean = true;
  @Input() isCheckbox: boolean = false;
  public searchkey;
  @Output() onChange = new EventEmitter();
  @Output() onChecked = new EventEmitter();
  
  constructor(private treeService: BnNgTreeService) { }

  ngOnInit() {
    
    if(this.isCheckbox) {
      this.treeService.setInitialCheckedItems(this.items);
    }

    this.treeService.callSelectedItem$.subscribe((item) => {
      if(item) {
        this.onChange.emit(item);
      }
    });

    this.treeService.callCheckedItems$.subscribe((item) => {
      if(item) {
        this.onChecked.emit(this.treeService.getCheckedItems());
      }
    })
  }

  search(key) {
    this.searchkey = key;
  }

}
