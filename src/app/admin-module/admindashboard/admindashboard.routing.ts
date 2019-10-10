import { NgModule } from "@angular/core";
import { RouterModule } from '@angular/router';

import { AdmindashboardComponent } from './admindashboard.component';

var routes = [
    { path: '', component: AdmindashboardComponent },
    // { path: '', redirectTo: 'dashboard' }
    // { path: 'leaveStatus', component: LeaveStatusComponent }
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class AdmindashboardRoutingModule {

}
