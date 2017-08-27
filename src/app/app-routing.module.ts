import { NgModule }                 from '@angular/core';
import {
    RouterModule,
    Routes
}                                   from '@angular/router';

import { AuthenticationComponent }  from './components/authentication/authentication.component';
import { ContactComponent }         from './components/contact/contact.component';
import { CoverComponent }           from './components/cover/cover.component';
import { HomeComponent }            from './components/home/home.component';
import { LearnMoreComponent }       from './components/learn-more/learn-more.component';
import { NotFoundComponent }        from './components/not-found/not-found.component';
import { RegisterComponent }        from './components/register/register.component';

const appRoutes: Routes = [
    { path: '', component: CoverComponent },
    { path: 'authentication', component: AuthenticationComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'contact', component: ContactComponent },
    { path: 'learn-more', component: LearnMoreComponent },
    { path: '**', component: NotFoundComponent }
]

@NgModule({
    declarations: [],
    imports: [
        RouterModule.forRoot(appRoutes)
    ],
    providers: [],
    bootstrap: [],
    exports: [
        RouterModule
    ]
})

export class AppRoutingModule { }