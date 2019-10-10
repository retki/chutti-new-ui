import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminHomeRouting } from './admin-home.routing';
import { AdminHomeComponent } from './admin-home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { NgCircleProgressModule } from 'ng-circle-progress';
import { Daterangepicker } from 'ng2-daterangepicker';
import { DatePipe } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PaginationModule } from '../user-module/chutti-pagination/chutti-pagination.module';
import { LoadingBarModule } from '@ngx-loading-bar/core';


@NgModule({
  declarations: [AdminHomeComponent],
  imports: [
    CommonModule,
    AdminHomeRouting,
    CommonModule,
   
    FormsModule,
    ReactiveFormsModule,
    NgCircleProgressModule.forRoot({}),
    Daterangepicker,
    NgbModule,
    PaginationModule,
    LoadingBarModule,
    
  ],
  providers: [DatePipe],
  
})
export class AdminHomeModule { }