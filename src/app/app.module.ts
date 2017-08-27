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
import { ContactComponent }         from './components/contact/contact.component';
import { LearnMoreComponent }       from './components/learn-more/learn-more.component';
import { RegisterComponent }        from './components/register/register.component';
import { LoginComponent }           from './components/login/login.component';
import { RegisterFormComponent }    from './components/register-form/register-form.component';
import { NotFoundComponent }        from './components/not-found/not-found.component';

@NgModule({
    declarations: [
        AppComponent,
        NavigationComponent,
        HomeComponent,
        DashboardComponent,
        AuthenticationComponent,
        MessengerComponent,
        CoverComponent,
        ContactComponent,
        LearnMoreComponent,
        RegisterComponent,
        LoginComponent,
        RegisterFormComponent,
        NotFoundComponent
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
