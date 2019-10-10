import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SupportComponent } from './support.component';
import { SupportRoutingModule } from './support.routing';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { PaginationModule } from '../chutti-pagination/chutti-pagination.module';
import { LoadingBarModule } from '@ngx-loading-bar/core';
@NgModule({
  declarations: [SupportComponent],
  imports: [
    CommonModule,
    SupportRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    PaginationModule,
    LoadingBarModule
  ]
})
export class SupportModule { }
