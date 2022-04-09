import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {GraphQLModule} from './graphql.module';
import {HttpClientModule} from '@angular/common/http';

import {APOLLO_OPTIONS} from 'apollo-angular';
import {HttpLink} from 'apollo-angular/http';
import {InMemoryCache} from '@apollo/client/core';
import {LoginComponent} from './login/login.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {HotelComponent} from './hotel/hotel.component';
import {ReactiveFormsModule} from '@angular/forms';
import {HotelCardComponent} from './hotel-card/hotel-card.component';
import {NavbarComponent} from './navbar/navbar.component';
import {HotelSerachComponent} from './hotel-serach/hotel-serach.component';
import {SignupComponent} from './signup/signup.component';
import {BookingComponent} from './booking/booking.component';
import {BookingCardComponent} from './booking-card/booking-card.component';

import { UserComponent } from './user/user.component';

import {env, uri} from './uri';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HotelComponent,
    HotelCardComponent,
    NavbarComponent,
    HotelSerachComponent,
    SignupComponent,
    BookingComponent,
    BookingCardComponent,
    UserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    GraphQLModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
  ],
  providers: [
    {
      provide: APOLLO_OPTIONS,
      useFactory: (httpLink: HttpLink) => {
        return {
          cache: new InMemoryCache(),
          link: httpLink.create({
            uri: env === "prod" ? uri['prod'] : uri['dev'],
            withCredentials: true,
          })
        };
      },
      deps: [HttpLink],
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {
}
