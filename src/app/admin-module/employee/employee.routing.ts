import { NgModule } from "@angular/core";
import { RouterModule } from '@angular/router';

import { EmployeeListComponent } from './employee-list/employee-list.component';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { EditEmployeeComponent } from './edit-employee/edit-employee.component';

var routes = [
    { path: '', component: EmployeeListComponent },
    { path: 'add', component: AddEmployeeComponent },
    { path: 'edit', component: EditEmployeeComponent }


]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class EmployeeRoutingModule {

}