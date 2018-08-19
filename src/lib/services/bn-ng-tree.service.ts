import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class BnNgTreeService {
  selectedItem = new BehaviorSubject<any>(false);
  checkedItemsSub = new BehaviorSubject<any>(false);

  callSelectedItem$ = this.selectedItem.asObservable();
  callCheckedItems$ = this.checkedItemsSub.asObservable();

  private checkedItems: Array<any> = [];

  constructor() { }

  setSelectedItem(item): void {
    this.selectedItem.next(item);
  }

  setInitialCheckedItems(allItems) {
   let setCheckedItems =(items) => {
      items.forEach((item) => {
        if(item.checked) {
          this.checkedItems.push(item);
        }
        if(item.children) {
          if(item.children.length > 0) {
            setCheckedItems(item.children);
          }
        }
      });
   }
   
   setCheckedItems(allItems);
  }

  addCheckedItem(item): void {
    this.checkedItems.push(item);
    this.checkedItemsSub.next(true);
  }

  getCheckedItems(): Array<any> {
    return this.checkedItems;
  }

  removeCheckedItem(item): void {
    let checkedItemIndex = this.checkedItems.indexOf(item);
    if(checkedItemIndex > -1) {
      this.checkedItems.splice(checkedItemIndex,1);
      this.checkedItemsSub.next(true);
    }
  }
}
