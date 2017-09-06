
/* import Modules */
import { Routes, RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

/* import Components */
import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { RegistrationComponent } from './registration/registration.component';
import { LoginFormComponent } from './login-form/login-form.component';

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
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
