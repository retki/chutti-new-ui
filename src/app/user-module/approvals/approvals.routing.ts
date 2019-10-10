import { NgModule } from "@angular/core";
import { RouterModule } from '@angular/router';
import { AttendanceapprovalsComponent } from './attendanceapprovals/attendanceapprovals.component';
import { LeaveapprovalsComponent } from './leaveapprovals/leaveapprovals.component';
import { LeaveDetailsComponent } from './leaveapprovals/leave-details/leave-details.component';

var routes=[
    {path:'attendanceapprovals',component:AttendanceapprovalsComponent},
    {path:'leaveapprovals',component:LeaveapprovalsComponent},
    {path:'leavedetails',component:LeaveDetailsComponent},
]

@NgModule({
    imports:[RouterModule.forChild(routes)],
    exports:[RouterModule],
})
export class ApprovalsRoutingModule{

}