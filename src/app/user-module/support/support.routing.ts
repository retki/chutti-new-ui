import { NgModule } from "@angular/core";
import { RouterModule } from '@angular/router';
import { SupportComponent } from './support.component';

var routes=[
    {path:'',component:SupportComponent},
]

@NgModule({
    imports:[RouterModule.forChild(routes)],
    exports:[RouterModule],
})
export class SupportRoutingModule{

}