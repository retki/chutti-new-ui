import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalendarComponent } from './calendar.component';
import { CalendarRoutingModule } from './calendar.routing';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import { FormsModule } from '@angular/forms';
import { FlatpickrModule } from 'angularx-flatpickr';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { GoogleAuthService } from 'ng-gapi';
import { LoadingBarModule } from '@ngx-loading-bar/core';
@NgModule({
  declarations: [CalendarComponent],
  imports: [
    CommonModule,
    CalendarRoutingModule,
    CalendarModule.forRoot({
      provide: DateAdapter,
      useFactory: adapterFactory
    }),
    FormsModule,
    FlatpickrModule.forRoot(),
    NgbModule,LoadingBarModule
  ],
  providers:[
    GoogleAuthService
  ]
})
export class ChuttiCalendarModule { }
