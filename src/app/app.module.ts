import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';

import { APOLLO_OPTIONS } from 'apollo-angular';
import { HttpLink } from 'apollo-angular/http';
import { InMemoryCache } from '@apollo/client/core';
import { NavbarComponent } from './navbar/navbar.component';

const heroku = 'https://airbnb-graphql-yoga.herokuapp.com/';
const local = 'http://localhost:4000';
const isLocal = false;

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    {
      provide: APOLLO_OPTIONS,
      useFactory: (httpLink: HttpLink) => {
        return {
          cache: new InMemoryCache(),
          link: httpLink.create({
            uri: heroku,
            withCredentials: true,
          })
        };
      },
      deps: [HttpLink],
    },
    // CanActivateRouteService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
