import { NgModule } from "@angular/core";
import { RouterModule } from '@angular/router';
import { OrganizationlistComponent } from './organizationlist/organizationlist.component';
import { AddroleComponent } from './organizationlist/role/addrole/addrole.component';
import { UpdateroleComponent } from './organizationlist/role/updaterole/updaterole.component';
import { OrganizationAddComponent } from './organizationlist/organization-add/organization-add.component';
import { OrganizationUpdateComponent } from './organizationlist/organization-update/organization-update.component';


var routes = [
    { path: '', component: OrganizationlistComponent },
    { path: 'role/add', component: AddroleComponent },
    { path: 'role/update', component: UpdateroleComponent },
    { path: 'organizationAdd', component: OrganizationAddComponent },
    { path: 'organizationUpate', component: OrganizationUpdateComponent },

]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class OrganizationRoutingModule {

}