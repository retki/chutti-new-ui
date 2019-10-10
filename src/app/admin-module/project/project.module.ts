import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectListComponent } from './project-list/project-list.component';
import { ProjectTypeComponent } from './project-type/project-type.component';
import { ProjectAssignmentComponent } from './project-assignment/project-assignment.component';
import { ProjectComponent } from './project.component';
import {ProjectRoutingModule}from './project.routing';
import { LoadingBarModule } from '@ngx-loading-bar/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AddProjectListComponent } from './project-list/add-project-list/add-project-list.component';
import { AddProjectAssignmentComponent } from './project-assignment/add-project-assignment/add-project-assignment.component';
import { Daterangepicker } from 'ng2-daterangepicker';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { EditProjectListComponent } from './project-list/edit-project-list/edit-project-list.component';
import { PaginationModule } from 'src/app/user-module/chutti-pagination/chutti-pagination.module';
import { EditProjectAssignmentComponent } from './project-assignment/edit-project-assignment/edit-project-assignment.component';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { SharedModule } from 'src/app/commons/chutti-filters/ShareModule';

@NgModule({
  declarations: [ProjectListComponent, ProjectTypeComponent, ProjectAssignmentComponent, ProjectComponent, AddProjectAssignmentComponent,AddProjectListComponent, EditProjectListComponent, EditProjectAssignmentComponent],
  imports: [
    CommonModule,
    ProjectRoutingModule,
    LoadingBarModule,
    ReactiveFormsModule,
    FormsModule,
    Daterangepicker,
    NgbModule,
    PaginationModule,
    SharedModule,
    NgMultiSelectDropDownModule.forRoot()
  ]
})
export class ProjectModule { }
