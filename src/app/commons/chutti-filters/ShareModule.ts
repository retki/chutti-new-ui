import { NgModule } from '@angular/core';
import { PaginatePipe } from './paginate/paginate.pipe';
import { SearchPipe } from './search/search.pipe';
import { SortPipe } from './sort/sort.pipe';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@NgModule({
    imports: [
   CommonModule
      
    ],
    declarations: [
        PaginatePipe,
        SearchPipe,
        SortPipe,
        
        // FormsModule
    ],
    exports: [
        PaginatePipe,
        SearchPipe,
        SortPipe
    ],
    providers: [
    ]
  
  })
  export class SharedModule { }