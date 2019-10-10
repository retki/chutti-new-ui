import { NgModule } from "@angular/core";
import { RouterModule } from '@angular/router';
import { LeaveComponent } from './leave.component';

var routes=[
    {path:'',component:LeaveComponent},

]

@NgModule({
    imports:[RouterModule.forChild(routes)],
    exports:[RouterModule],
})
export class LeaveRoutingModule{

}