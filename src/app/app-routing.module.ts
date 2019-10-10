import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ForgotPasswordComponent } from './commons/forgot-password/forgot-password.component';
import { SignInComponent } from './commons/sign-in/sign-in.component';
import { UserHomeComponent } from './user-module/user-home.component';
import { AuthGuard } from './services/auth-guard.service';
import { ManagerAuthGuard } from './services/manager-auth-guard.service';
import { SetpasswordComponent } from './commons/setpassword/setpassword.component';
import { AutoLoginComponent } from './commons/auto-login/auto-login.component';
import { AdminHomeComponent } from './admin-module/admin-home.component';
import { LeaveResponseComponent } from './leave-response/leave-response.component';
import { LeaveApproveComponent } from './commons/leave-approve/leave-approve.component';
import { NotAuthorizedComponent } from './commons/not-authorized/not-authorized.component';
import { SignUpComponent } from './sign-up/sign-up/sign-up.component';
import { AdminGenerationComponent } from './sign-up/admin-generation/admin-generation.component';
import { StartComponent } from './sign-up/start/start.component';
import { SignupSetpasswordComponent } from './sign-up/signup-setpassword/signup-setpassword.component';
import { SetUpFinishComponent } from './sign-up/set-up-finish/set-up-finish.component';
import {TokenexpiredComponent} from './sign-up/tokenexpired/tokenexpired.component'
import { InitialSetupComponent } from './sign-up/initial-setup/initial-setup.component';

const routes: Routes = [
  { path: 'signIn', component: SignInComponent },
  { path: 'forgetPassword', component: ForgotPasswordComponent },
  { path: 'setuserpassword', component: SetpasswordComponent },
  { path: 'autologin', component: AutoLoginComponent },
  { path: 'leavestatus', component: LeaveResponseComponent },
  { path: 'signup', component: SignUpComponent },
  { path: 'signupsetpassword', component: SignupSetpasswordComponent },
  {path:'tokenexpired',component:TokenexpiredComponent},
  {path:'initialsetupcheck' ,component:InitialSetupComponent},
  

  {
    path: 'adminApproval',
    canActivate: [],
    component: LeaveApproveComponent
  },
  { path: 'notAuthorized', component: NotAuthorizedComponent },

  { path: 'signup', component: SignUpComponent },
  { path: 'admingeneration', component: AdminGenerationComponent },
  { path: 'start', component: StartComponent },
  { path: 'setupFinish', component: SetUpFinishComponent },
  { path: 'leavestatus', component: LeaveResponseComponent},
  {
    path: 'user', component: UserHomeComponent,
    canActivate: [AuthGuard, ManagerAuthGuard],
    loadChildren: () => import('./user-module/user-home.module').then(m => m.UserHomeModule),

  },
  {
    path: 'admin', component: AdminHomeComponent,
  //  canActivate: [AuthGuard],
    loadChildren: () => import('./admin-module/admin-home.module').then(m => m.AdminHomeModule)

  },
  {
    path: '',
    redirectTo: '/signIn',
    pathMatch: 'full'
  },
  { path: '**', redirectTo: 'signIn' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
