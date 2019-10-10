import { NgModule } from "@angular/core";
import { RouterModule } from '@angular/router';
import { TimeSheetComponent } from './time-sheet.component';
import { AddTimeSheetComponent } from './add-time-sheet/add-time-sheet.component';
import { EditTimeSheetComponent } from './edit-time-sheet/edit-time-sheet.component';

var routes=[
    {path:'',component:TimeSheetComponent},
    {path:'addTimeSheet',component:AddTimeSheetComponent},
    {path:'editTimeSheet',component:EditTimeSheetComponent},
]

@NgModule({
    imports:[RouterModule.forChild(routes)],
    exports:[RouterModule],
})
export class TimeSheetRoutingModule{

}