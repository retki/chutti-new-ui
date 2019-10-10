import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

const routes: Routes = [
  { path: 'admindashboard', loadChildren: () => import('./admindashboard/admindashboard.module').then(m => m.AdmindasboardModule) },
  { path: 'employee', loadChildren: () => import('./employee/employee.module').then(m => m.EmployeeModule) },
  { path: 'organization', loadChildren: () => import('./organization/organization.module').then(m => m.OrganizationModule) },
  { path: 'project', loadChildren: () => import('./project/project.module').then(m => m.ProjectModule) },
  { path: 'attendance', loadChildren: () => import('./attendance/attendance.module').then(m => m.AttendanceModule) },
  { path: 'leave', loadChildren: () => import('./leave/leave.module').then(m => m.LeaveModule) },
  { path: 'holiday', loadChildren: () => import('./holiday/holiday.module').then(m => m.holidayModule) },
  

  { path: '', redirectTo: 'admindashboard', pathMatch: 'full' },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule,]
})
export class AdminHomeRouting { }