import { NgModule } from "@angular/core";
import { RouterModule } from '@angular/router';
import { MyprofileComponent } from './myprofile/myprofile.component';
import { ChangepasswordComponent } from './changepassword/changepassword.component';

var routes=[
    {path:'',component:MyprofileComponent},
    {path:'changepassword',component:ChangepasswordComponent},
]

@NgModule({
    imports:[RouterModule.forChild(routes)],
    exports:[RouterModule],
})
export class myprofileRoutingModule{

}