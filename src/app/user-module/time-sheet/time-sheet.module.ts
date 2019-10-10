import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TimeSheetRoutingModule } from './time-sheet.routing';
import { TimeSheetComponent } from './time-sheet.component';
import { AddTimeSheetComponent } from './add-time-sheet/add-time-sheet.component';
import { EditTimeSheetComponent } from './edit-time-sheet/edit-time-sheet.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TextMaskModule } from 'angular2-text-mask';
import { LoadingBarModule } from '@ngx-loading-bar/core';

@NgModule({
  declarations: [TimeSheetComponent, AddTimeSheetComponent, EditTimeSheetComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    TimeSheetRoutingModule,
    TextMaskModule,LoadingBarModule
  ]
})
export class TimeSheetModule { }
