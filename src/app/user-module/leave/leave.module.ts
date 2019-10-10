import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LeaveComponent } from './leave.component';
import { LeaveRoutingModule } from './leave.routing';
import { UpcommingHolidaysComponent } from './upcomming-holidays/upcomming-holidays.component';
import { DashboardModule } from '../dashboard/dashboard.module';
import { ApprovalsModule } from '../approvals/approvals.module';
import { LoadingBarModule } from '@ngx-loading-bar/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
@NgModule({
  declarations: [LeaveComponent, UpcommingHolidaysComponent ],
  imports: [
    CommonModule,
    LeaveRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    DashboardModule,
    ApprovalsModule,
    LoadingBarModule,

  ],
  exports:[UpcommingHolidaysComponent]
})
export class LeaveModule { }
