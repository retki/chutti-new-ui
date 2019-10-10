import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { LeaveComponent } from './leave.component';
const routes = [
    { path: '', component: LeaveComponent },
]
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class LeaveRouting {}
