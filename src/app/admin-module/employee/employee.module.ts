import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { EmployeeRoutingModule } from './employee.routing';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { LoadingBarModule } from '@ngx-loading-bar/core';
import { PaginationModule } from 'src/app/user-module/chutti-pagination/chutti-pagination.module';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SharedModule } from 'src/app/commons/chutti-filters/ShareModule';
import { EditEmployeeComponent } from './edit-employee/edit-employee.component';
import { Ng4GeoautocompleteModule } from 'ng4-geoautocomplete';

@NgModule({
  declarations: [EmployeeListComponent,AddEmployeeComponent, EditEmployeeComponent],
  imports: [
    CommonModule,
    EmployeeRoutingModule,
    LoadingBarModule,
    FormsModule,
    ReactiveFormsModule,
    PaginationModule,
    NgbModule,
    SharedModule,
    Ng4GeoautocompleteModule
  ],

})
export class EmployeeModule { }