import { BrowserModule }            from '@angular/platform-browser';
import { NgModule }                 from '@angular/core';
import { FormsModule }              from '@angular/forms';
import { HttpModule }               from '@angular/http';

import { AppComponent }             from './app.component';
import { AppRoutingModule }         from './app-routing.module';

import { NavigationComponent }      from './components/navigation/navigation.component';
import { HomeComponent }            from './components/home/home.component';
import { DashboardComponent }       from './components/dashboard/dashboard.component';
import { AuthenticationComponent }  from './components/authentication/authentication.component';
import { MessengerComponent }       from './components/messenger/messenger.component';
import { CoverComponent }           from './components/cover/cover.component';

@NgModule({
  declarations: [
      AppComponent,
      NavigationComponent,
      HomeComponent,
      DashboardComponent,
      AuthenticationComponent,
      MessengerComponent,
      CoverComponent,
  ],
  imports: [
      AppRoutingModule,
      BrowserModule,
      FormsModule,
      HttpModule
  ],
  providers: [

  ],
  bootstrap: [
      AppComponent
  ]
})

export class AppModule { }
