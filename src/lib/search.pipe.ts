import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {
  private searchedItems;

  transform(value: any, key?: any): any {
    if(key != undefined) {
      this.searchedItems = [];
      let searchResult = this.searchRecursive(value,key);
      console.log(searchResult);
      return searchResult;
    }
   return value;
  }

  searchRecursive(value, key) {
    for(let i=0; i < value.length; i++) {
      if(value[i].name.includes(key)) {
        this.searchedItems.push(value[i]);
      } else if(value[i].children) {
        if(value[i].children.length > 0) {
          this.searchRecursive(value[i].children,key);
        }
      }
    }

    return this.searchedItems;
  }

}
