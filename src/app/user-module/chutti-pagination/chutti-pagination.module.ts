import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { ChuttiPaginationComponent } from '../chutti-pagination/chutti-pagination.component';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { Daterangepicker } from 'ng2-daterangepicker';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [ChuttiPaginationComponent],
  exports:[ChuttiPaginationComponent]
})
export class PaginationModule { }