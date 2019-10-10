import { NgModule } from "@angular/core";
import { RouterModule } from '@angular/router';
import { AttendanceComponent } from './attendance.component';

var routes=[
    {path:'',component:AttendanceComponent},

]

@NgModule({
    imports:[RouterModule.forChild(routes)],
    exports:[RouterModule],
})
export class AttendanceRoutingModule{

}