import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { AttendanceComponent } from './attendance.component';
const routes = [
    { path: '', component: AttendanceComponent },
]
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class AttendanceRouting {}
