import { NgModule } from "@angular/core";
import { RouterModule } from '@angular/router';
import { HolidayComponent } from './holiday.component';

var routes = [
    { path: '', component: HolidayComponent },
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class holidayRoutingModule {

}