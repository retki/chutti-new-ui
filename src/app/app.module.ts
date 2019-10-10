import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignInComponent } from './commons/sign-in/sign-in.component';
import { ForgotPasswordComponent } from './commons/forgot-password/forgot-password.component';
import { UserHomeModule } from './user-module/user-home.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UrlConstant } from './services/urlConstant';
import { Genericservice } from './services/genericservices';
import { EncryptDecryptService } from './services/encrypt-decrypt.service';
import { EncryptDecryptLocalStorageService } from './services/encrypt-decrypt-localstorage.service';
import { HttpClientModule, HttpHeaders } from '@angular/common/http';
import { AuthGuard } from './services/auth-guard.service';
import { HttpModule } from '@angular/http';
import { PaginationModule } from './user-module/chutti-pagination/chutti-pagination.module'
import { SetpasswordComponent } from './commons/setpassword/setpassword.component';
import { AttendanceComponent } from './user-module/attendance/attendance.component';
import { GoogleApiModule, GoogleApiService, GoogleAuthService, NgGapiClientConfig, NG_GAPI_CONFIG, GoogleApiConfig } from "ng-gapi";
import { ChuttiPaginationComponent } from './user-module/chutti-pagination/chutti-pagination.component';
import { LoadingBarModule } from '@ngx-loading-bar/core';
import { AutoLoginComponent } from './commons/auto-login/auto-login.component';
import { EmployeeListComponent } from './admin-module/employee/employee-list/employee-list.component';
import { AdminHomeModule } from './admin-module/admin-home.module';
import { LeaveResponseComponent } from './leave-response/leave-response.component';
// import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { WindowRef } from 'src/app/services/WindowRefservices';
import { LeaveApproveComponent } from './commons/leave-approve/leave-approve.component';
import { NotAuthorizedComponent } from './commons/not-authorized/not-authorized.component';
import { SignUpComponent } from './sign-up/sign-up/sign-up.component';
import { StartComponent } from './sign-up/start/start.component';
import { AdminGenerationComponent } from './sign-up/admin-generation/admin-generation.component';
import { AdminGenerationOrganizationComponent } from './sign-up/admin-generation-organization/admin-generation-organization.component';
import { AdminGenerationImportUsersComponent } from './sign-up/admin-generation-import-users/admin-generation-import-users.component';
import { AdminGenerationUserMappingComponent } from './sign-up/admin-generation-user-mapping/admin-generation-user-mapping.component';
import { AdminGenerationLeavePolicyComponent } from './sign-up/admin-generation-leave-policy/admin-generation-leave-policy.component';
import { Ng4GeoautocompleteModule } from 'ng4-geoautocomplete';
// import { LeavepolicyComponent } from './admin-module/leave/leavepolicy/leavepolicy.component';
import { SharedModule } from './commons/chutti-filters/ShareModule';
import { SignupSetpasswordComponent } from './sign-up/signup-setpassword/signup-setpassword.component';
import { LeaveModule } from './admin-module/leave/leave.module';
import { SetUpFinishComponent } from './sign-up/set-up-finish/set-up-finish.component';
import { SiginAdminStartComponent } from './sign-up/sigin-admin-start/sigin-admin-start.component';
import { TokenexpiredComponent } from './sign-up/tokenexpired/tokenexpired.component';
import { InitialSetupComponent } from './sign-up/initial-setup/initial-setup.component';
import { NgSelectModule } from '@ng-select/ng-select';
import { ValidationService } from '../app/services/validation.service';

let gapiClientConfig: NgGapiClientConfig = {
  client_id: "69576877144-989gvbjdrngguuqjidug4v62hl9h5tjo.apps.googleusercontent.com",
  discoveryDocs: ["https://analyticsreporting.googleapis.com/$discovery/rest?version=v4"],
  scope: [
    'https://www.googleapis.com/auth/calendar',
    'https://www.googleapis.com/auth/calendar.readonly'
  ].join(" ")
};


@NgModule({
  declarations: [
    AppComponent,
    SignInComponent,
    ForgotPasswordComponent,
    SetpasswordComponent,
    AutoLoginComponent,
    LeaveResponseComponent,
    LeaveApproveComponent,
    NotAuthorizedComponent,
    SignUpComponent,
    StartComponent,
    AdminGenerationComponent,
    AdminGenerationOrganizationComponent,
    AdminGenerationImportUsersComponent,
    AdminGenerationUserMappingComponent,
    AdminGenerationLeavePolicyComponent,
    SignupSetpasswordComponent,
    SetUpFinishComponent,
    SiginAdminStartComponent,
    TokenexpiredComponent,
    InitialSetupComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    UserHomeModule, FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    //  NgMultiSelectDropDownModule.forRoot(),
    GoogleApiModule.forRoot({
      provide: NG_GAPI_CONFIG,
      useValue: gapiClientConfig
    }),
    HttpModule,
    PaginationModule,
    LoadingBarModule,
    AdminHomeModule,
    Ng4GeoautocompleteModule.forRoot(),
    SharedModule,
    FormsModule,
    LeaveModule,
    NgSelectModule
  ],
  providers: [
    UrlConstant,
    Genericservice,
    EncryptDecryptLocalStorageService,
    EncryptDecryptService,
    AuthGuard,
    AppRoutingModule,
    UserHomeModule,
    GoogleAuthService, AdminHomeModule,
    WindowRef,
    ValidationService
  ],
  exports:
  [],
  bootstrap: [AppComponent]
})
export class AppModule { }
