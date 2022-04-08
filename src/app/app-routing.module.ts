import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './user/user.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
  {
    path: 'user',
    component: UserComponent,
    pathMatch: 'full',
    // canActivate: [CanActivateRouteService]
  },
  {
    path: '',
    component: LoginComponent,
    pathMatch: 'full',
    // canActivate: [CanActivateRouteService]
  },
  {
    path: 'signup',
    component: SignupComponent,
    pathMatch: 'full',
    // canActivate: [CanActivateRouteService]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
