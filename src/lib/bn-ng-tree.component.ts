import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { BnNgTreeService } from './services/bn-ng-tree.service';
import { Observable } from 'rxjs/internal/Observable';


@Component({
  selector: 'bn-ng-tree',
  templateUrl: './bn-ng-tree.component.html',
  styleUrls: ['./bn-ng-tree.component.css']
})
export class BnNgTreeComponent implements OnInit {
  @Input() items;
  @Input() theme: string = "default";
  @Input() isSearch: boolean = true;
  @Input() isCheckbox: boolean = false;
  @Input() enableContextMenu: boolean = false;

  @Output() onChange = new EventEmitter();
  @Output() onChecked = new EventEmitter();


  public searchkey;
  public showContextMenu: boolean = false;
  public contextMenu: Array<any> = [{
    name: 'Add'
  }, {
    name: 'Edit'
  }, {
    name: 'Delete'
  }];

  private contextSelectedItem: any;

  constructor(private treeService: BnNgTreeService) { }

  ngOnInit() {

    if (this.isCheckbox) {
      this.treeService.setInitialCheckedItems(this.items);
    }

    this.treeService.callSelectedItem$.subscribe((item) => {
      if (item) {
        this.onChange.emit(item);
      }
    });

    this.treeService.callCheckedItems$.subscribe((item) => {
      if (item) {
        this.onChecked.emit(this.treeService.getCheckedItems());
      }
    });

    this.treeService.contextMenuItem.subscribe((item) => {
      this.showContextMenu = true;
      this.contextSelectedItem = item.data;
    })
  }

  search(key) {
    this.searchkey = key;
  }

  hideContextMenu() {
    this.showContextMenu = false;
  }

  onContextClick(e) {
    if (e.name == 'Delete') {
      this.treeService.removeItem(this.contextSelectedItem, this.items);
    }
  }


}
