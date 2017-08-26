import { BrowserModule }        from '@angular/platform-browser';
import { NgModule }             from '@angular/core';
import { FormsModule }          from '@angular/forms';
import { HttpModule }           from '@angular/http';

import { AppComponent }         from './app.component';
import { AppRoutingModule }     from './app-routing.module';

import { NavigationComponent }  from './components/navigation/navigation.component';
import { HomeComponent }        from './components/home/home.component';
import { DashboardComponent }   from './components/dashboard/dashboard.component';

@NgModule({
  declarations: [
      AppComponent,
      NavigationComponent,
      HomeComponent,
      DashboardComponent
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
