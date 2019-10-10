import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyprofileComponent } from './myprofile/myprofile.component';
import { ChangepasswordComponent } from './changepassword/changepassword.component';
import { myprofileRoutingModule } from './myprofile.routing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgCircleProgressModule } from 'ng-circle-progress';
@NgModule({
  declarations: [MyprofileComponent,ChangepasswordComponent],
  imports: [
    CommonModule,
    myprofileRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgCircleProgressModule.forRoot({})

  ]
})
export class myprofileModule { }