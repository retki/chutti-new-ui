import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';



import { LoadingBarModule } from '@ngx-loading-bar/core';
import { PaginationModule } from 'src/app/user-module/chutti-pagination/chutti-pagination.module';
import { OrganizationlistComponent } from './organizationlist/organizationlist.component';
import { OrganizationRoutingModule } from './organization.routing';
import { DepartmentsComponent } from './organizationlist/departments/departments.component';
import { DesignationsComponent } from './organizationlist/designations/designations.component';
import { RoleComponent } from './organizationlist/role/role.component';
import { AddroleComponent } from './organizationlist/role/addrole/addrole.component';
import { UpdateroleComponent } from './organizationlist/role/updaterole/updaterole.component';
import { OrganizationAddComponent } from './organizationlist/organization-add/organization-add.component';
import { OrganizationUpdateComponent } from './organizationlist/organization-update/organization-update.component';
import { TextMaskModule } from 'angular2-text-mask';
import { SharedModule } from '../../commons/chutti-filters/ShareModule';
import { NgSelectModule } from '@ng-select/ng-select';
@NgModule({
  declarations: [OrganizationlistComponent, DepartmentsComponent, DesignationsComponent, RoleComponent, AddroleComponent, UpdateroleComponent
    , OrganizationAddComponent, OrganizationUpdateComponent],
  imports: [
    CommonModule,
    OrganizationRoutingModule,
    LoadingBarModule,
    FormsModule,
    ReactiveFormsModule,
    PaginationModule,
    TextMaskModule,
    SharedModule,
    NgSelectModule


  ],
exports:[OrganizationlistComponent,DepartmentsComponent,DesignationsComponent,RoleComponent]
})
export class OrganizationModule { }