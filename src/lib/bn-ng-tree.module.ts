import { NgModule } from '@angular/core';
import { BnNgTreeComponent } from './bn-ng-tree.component';
import { CommonModule } from '@angular/common';
import { BnNgTreeService } from './services/bn-ng-tree.service';
import { SearchBoxComponent } from './search-box/search-box.component';
import { FormsModule } from '@angular/forms';
import { SearchPipe } from './pipes/search.pipe';
import { TreeComponent } from './tree/tree.component';
import { ContextMenuModule } from '../../../context-menu/src/public_api';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ContextMenuModule
  ],
  providers: [
    BnNgTreeService
  ],
  declarations: [BnNgTreeComponent, SearchBoxComponent, SearchPipe, TreeComponent],
  exports: [BnNgTreeComponent]
})
export class BnNgTreeModule { }
