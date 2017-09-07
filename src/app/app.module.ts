
/* import Gesture Support */
import 'hammerjs';

/* import Modules */
import { Routes, RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

/* Angular Materials Modules Import */
import { MdInputModule, MdButtonModule, MdCardModule } from '@angular/material';

/* import Components */
import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { RegistrationComponent } from './registration/registration.component';
import { LoginFormComponent } from './login-form/login-form.component';

/* import Services */
import { LogRegService } from './log-reg.service';

/* Firebase Configurations */

export const firebaseConfig = {
  apiKey: 'AIzaSyDwE8MwRZpBdRg_7rvi1UeH95lTpZD5i6U',
  authDomain: 'todoapplicatoin.firebaseapp.com',
  databaseURL: 'https://todoapplicatoin.firebaseio.com',
  projectId: 'todoapplicatoin',
  storageBucket: 'todoapplicatoin.appspot.com',
  messagingSenderId: '20716683033'
};

/* Routers Configurations */
const routes: Routes = [
    {
      path: '',
      redirectTo: 'login',
      pathMatch: 'full'
    },
    {
      path: 'login',
      component: LoginFormComponent
    },
    {
      path: 'registration',
      component: RegistrationComponent
    },
    {
      path: '**',
      component: PageNotFoundComponent
    }
  ];

@NgModule({
  declarations: [
    AppComponent,
    LoginFormComponent,
    RegistrationComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    MdCardModule,
    RouterModule.forRoot(routes),
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireAuthModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MdInputModule,
    MdButtonModule
  ],
  providers: [LogRegService],
  bootstrap: [AppComponent]
})
export class AppModule { }
