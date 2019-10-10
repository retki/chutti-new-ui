import { NgModule } from "@angular/core";
import { RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { LeavestatusComponent } from './leavestatus/leavestatus.component';

var routes = [
    { path: '', component: DashboardComponent },
    // { path: '', redirectTo: 'dashboard' }
    { path: 'leaveStatus', component: LeavestatusComponent }
]   


@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class DashboardRoutingModule {

}