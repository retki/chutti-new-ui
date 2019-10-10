import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AttendanceComponent } from './attendance.component';
import { AttendanceRoutingModule } from './attendance.routing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ChuttiPaginationComponent } from '../chutti-pagination/chutti-pagination.component';
import { PaginationModule } from '../chutti-pagination/chutti-pagination.module';
import { ApprovalsModule } from '../approvals/approvals.module';
import { MyAttendanceComponent } from './my-attendance/my-attendance.component';
import { LoadingBarModule } from '@ngx-loading-bar/core';
@NgModule({
  declarations: [AttendanceComponent, MyAttendanceComponent],
  imports: [
    CommonModule,
    AttendanceRoutingModule, 
    FormsModule,
    ReactiveFormsModule,
    FormsModule,
    PaginationModule,
    ApprovalsModule,LoadingBarModule
  ]
})
export class AttendanceModule { }
