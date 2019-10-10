import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

const routes: Routes = [
 {path:'dashboard', loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule)},
 {path:'leave', loadChildren: () => import('./leave/leave.module').then(m => m.LeaveModule)},
 {path:'attendance', loadChildren: () => import('./attendance/attendance.module').then(m => m.AttendanceModule)},
 {path:'timesheet', loadChildren: () => import('./time-sheet/time-sheet.module').then(m => m.TimeSheetModule)},
 {path:'calendar', loadChildren: () => import('./calendar/calendar.module').then(m => m.ChuttiCalendarModule)},
 {path:'support', loadChildren: () => import('./support/support.module').then(m => m.SupportModule)},
 {path:'myprofile', loadChildren: () => import('./myprofile/myprofile.module').then(m => m.myprofileModule)},
 {path:'approvals', loadChildren: () => import('./approvals/approvals.module').then(m => m.ApprovalsModule)},
//  {path: 'admin', loadChildren: () => import('../admin-module/admin-home.module').then(m => m.AdminHomeModule)

// },
 {path:'', redirectTo:'dashboard',pathMatch:'full'},
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserHomeRouting { }

