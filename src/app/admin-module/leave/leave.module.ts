import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LeaveRouting } from './leave.routing';
import { LeaveComponent } from './leave.component';
import { LeavetypeComponent } from './leavetype/leavetype.component';
import { LeavebalanceComponent } from './leavebalance/leavebalance.component';
import { LeavepolicyComponent } from './leavepolicy/leavepolicy.component';
import { LeavereportsComponent } from './leavereports/leavereports.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { PaginationModule } from 'src/app/user-module/chutti-pagination/chutti-pagination.module';
import { LoadingBarModule } from '@ngx-loading-bar/core';
import { SharedModule } from 'src/app/commons/chutti-filters/ShareModule';
import { LeavedetailsComponent } from './leavedetails/leavedetails.component';
import {ShiftComponent} from './shift/shift.component';
import { Daterangepicker } from 'ng2-daterangepicker';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';


@NgModule({
    declarations: [
        LeaveComponent, 
        LeavetypeComponent,
        LeavebalanceComponent,
        LeavepolicyComponent,
        LeavereportsComponent,
        LeavedetailsComponent,
        ShiftComponent
        
         ],

    imports: [
        CommonModule,
        LeaveRouting,
        ReactiveFormsModule,
        FormsModule,
        ReactiveFormsModule,
        PaginationModule,
        LeaveRouting,
        LoadingBarModule,
        SharedModule,
        NgbModule,
        NgMultiSelectDropDownModule.forRoot()
    ],
    exports: [
        LeaveComponent,
        LeavetypeComponent,
        LeavebalanceComponent,
        LeavepolicyComponent,]
})
export class LeaveModule { }
