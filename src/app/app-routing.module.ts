import { NgModule }                 from '@angular/core';
import {
    RouterModule,
    Routes
}                                   from '@angular/router';


import { AuthenticationComponent }  from './components/authentication/authentication.component';
import { CoverComponent }           from './components/cover/cover.component';
import { HomeComponent }            from './components/home/home.component';

const appRoutes: Routes = [
    { path: '', component: CoverComponent },
    { path: 'authentication', component: AuthenticationComponent },
    { path: 'home', component: HomeComponent },
    { path: '**', component: HomeComponent }
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