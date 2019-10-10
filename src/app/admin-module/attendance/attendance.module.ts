import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AttendanceComponent } from './attendance.component';
import { AttendanceRouting } from './attendance.routing';
import { PaginationModule } from '../../user-module/chutti-pagination/chutti-pagination.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SharedModule } from 'src/app/commons/chutti-filters/ShareModule';
@NgModule({
    declarations: [AttendanceComponent,],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        AttendanceRouting,
        PaginationModule,
        NgbModule,
        SharedModule,
    ],

})
export class AttendanceModule { }
