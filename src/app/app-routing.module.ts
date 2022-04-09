import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HotelComponent} from './hotel/hotel.component';
import {LoginComponent} from './login/login.component';
import {UserComponent} from './user/user.component';
import {HotelSerachComponent} from './hotel-serach/hotel-serach.component';
import {SignupComponent} from './signup/signup.component';
import {BookingComponent} from './booking/booking.component';

const routes: Routes = [
  {
    path: 'user',
    component: UserComponent,
    pathMatch: 'full',
  },
  {
    path: '',
    component: LoginComponent,
    pathMatch: 'full'
  },
  {
    path: 'hotel',
    component: HotelComponent,
    pathMatch: 'full',
  },
  {
    path: 'search-hotel',
    component: HotelSerachComponent,
    pathMatch: 'full',
  },
  {
    path: 'signup',
    component: SignupComponent,
    pathMatch: 'full'
  },
  {
    path: 'booking',
    component: BookingComponent,
    pathMatch: 'full',
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
