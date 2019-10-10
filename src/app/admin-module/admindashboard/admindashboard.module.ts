import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { AdmindashboardRoutingModule } from './admindashboard.routing';
import { TotalongoingprojectsComponent } from './totalongoingprojects/totalongoingprojects.component';
import { TotalemplooyeeComponent } from './totalemplooyee/totalemplooyee.component';
import { EmployeeonleaveComponent } from './employeeonleave/employeeonleave.component';
import { EmployeestatisticsComponent } from './employeestatistics/employeestatistics.component';
import { EmployeestatusComponent } from './employeestatus/employeestatus.component';
import { LatecomersComponent } from './latecomers/latecomers.component';
import { AdmindashboardComponent } from './admindashboard.component';
import { BarchartComponent } from './barchart/barchart.component'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { NgCircleProgressModule } from 'ng-circle-progress';
import { Daterangepicker } from 'ng2-daterangepicker';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PaginationModule } from '../../user-module/chutti-pagination/chutti-pagination.module';
import { LoadingBarModule } from '@ngx-loading-bar/core';


@NgModule({
  declarations: [
    EmployeeonleaveComponent,
    EmployeestatisticsComponent,
    EmployeestatusComponent,
    LatecomersComponent,
    TotalemplooyeeComponent,
    TotalongoingprojectsComponent,
    AdmindashboardComponent,
    BarchartComponent],
  imports: [
    CommonModule,
    AdmindashboardRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgCircleProgressModule.forRoot({}),
    Daterangepicker,
    NgbModule,
    PaginationModule,
    LoadingBarModule
  ],
  
  exports:[
    TotalemplooyeeComponent,
    TotalongoingprojectsComponent,
    LatecomersComponent,
    EmployeeonleaveComponent,
    EmployeestatisticsComponent,
    EmployeestatusComponent],
    providers:[DatePipe]
})
export class AdmindasboardModule { }