import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { DashboardRoutingModule } from './dashboard.routing';
import { QuickApplyComponent } from './quick-apply/quick-apply.component';
import { LeaveBankComponent } from './leave-bank/leave-bank.component';
import { DashboardAttendanceComponent } from './dashboard-attendance/dashboard-attendance.component';
import { WhosOnLeaveComponent } from './whos-on-leave/whos-on-leave.component';
import { LeaveStatusComponent } from './leave-status/leave-status.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { ChuttiPaginationComponent } from '../chutti-pagination/chutti-pagination.component';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { Daterangepicker } from 'ng2-daterangepicker';
import { DatePipe } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PaginationModule } from '../chutti-pagination/chutti-pagination.module';
import { LoadingBarModule } from '@ngx-loading-bar/core';
import { LeavestatusComponent } from './leavestatus/leavestatus.component';

@NgModule({
  declarations: [DashboardComponent, QuickApplyComponent, LeaveBankComponent,
    DashboardAttendanceComponent, WhosOnLeaveComponent, LeaveStatusComponent, LeavestatusComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgCircleProgressModule.forRoot({}),
    Daterangepicker,
    NgbModule,
    PaginationModule,
    LoadingBarModule
  ],
  providers: [DatePipe],
  exports:[QuickApplyComponent,LeaveBankComponent,LeaveStatusComponent]
})
export class DashboardModule { }
