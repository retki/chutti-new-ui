import { NgModule } from "@angular/core";
import { RouterModule } from '@angular/router';
import {ProjectComponent} from './project.component';
import { AddProjectListComponent } from './project-list/add-project-list/add-project-list.component';
import { AddProjectAssignmentComponent } from './project-assignment/add-project-assignment/add-project-assignment.component';
import { EditProjectListComponent } from './project-list/edit-project-list/edit-project-list.component';
import { EditProjectAssignmentComponent } from './project-assignment/edit-project-assignment/edit-project-assignment.component';

var routes = [
    { path: '', component: ProjectComponent },
    { path: 'projectAssignment/add', component: AddProjectAssignmentComponent },
    { path: 'projectAssignment/edit/:id', component: EditProjectAssignmentComponent },
    { path: 'projectList/add', component: AddProjectListComponent },
    { path: 'projectList/edit/:id', component: EditProjectListComponent },
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class ProjectRoutingModule {

}