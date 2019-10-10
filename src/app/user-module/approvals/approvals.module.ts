import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ChuttiPaginationComponent } from '../chutti-pagination/chutti-pagination.component';
import { PaginationModule } from '../chutti-pagination/chutti-pagination.module';
import { ApprovalsComponent } from './approvals.component';
import { ApprovalsRoutingModule } from './approvals.routing';
import { AttendanceapprovalsComponent } from './attendanceapprovals/attendanceapprovals.component';
import { LeaveapprovalsComponent } from './leaveapprovals/leaveapprovals.component';
import { LeaveDetailsComponent } from './leaveapprovals/leave-details/leave-details.component';
import { LoadingBarModule } from '@ngx-loading-bar/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [ApprovalsComponent,AttendanceapprovalsComponent,LeaveapprovalsComponent, LeaveDetailsComponent,],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    FormsModule,
    ReactiveFormsModule,
    PaginationModule,
    ApprovalsRoutingModule,
    LoadingBarModule,
    NgbModule
  ],
  exports: [LeaveapprovalsComponent,AttendanceapprovalsComponent]
})
export class ApprovalsModule { }