import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserHomeComponent } from './user-home.component';
import { UserHomeRouting } from './user-home.routing';
@NgModule({
  declarations: [UserHomeComponent],
  imports: [
    CommonModule,
    UserHomeRouting,
  ],
  
})
export class UserHomeModule { }
