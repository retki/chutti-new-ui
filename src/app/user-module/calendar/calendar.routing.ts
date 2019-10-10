import { NgModule } from "@angular/core";
import { RouterModule } from '@angular/router';
import { CalendarComponent } from './calendar.component';

var routes=[
    {path:'',component:CalendarComponent},
]

@NgModule({
    imports:[RouterModule.forChild(routes)],
    exports:[RouterModule],
})
export class CalendarRoutingModule{

}