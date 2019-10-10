import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HolidayComponent } from './holiday.component';
import {holidayRoutingModule} from '././holiday.routing';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/commons/chutti-filters/ShareModule';
import { PaginationModule } from 'src/app/user-module/chutti-pagination/chutti-pagination.module';
@NgModule({
    declarations: [HolidayComponent],
    imports: [
      CommonModule,
      holidayRoutingModule,
      ReactiveFormsModule,
      SharedModule,
      FormsModule,
      PaginationModule
    ]
  })
  export class holidayModule { }