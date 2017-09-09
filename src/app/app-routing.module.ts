import { NavComponent } from './nav/nav.component';
import { ToDoItemComponent } from './to-do-item/to-do-item.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ToDoListComponent } from './to-do-list/to-do-list.component';
import { RegistrationComponent } from './registration/registration.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

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
      path: 'list',
      component: ToDoListComponent
    },
    {
      path: '**',
      component: PageNotFoundComponent
    }
  ];

export const ComponentsArray = [
    LoginFormComponent,
    RegistrationComponent,
    ToDoItemComponent,
    ToDoListComponent,
    PageNotFoundComponent,
    NavComponent
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [RouterModule]
})

export class RoutingModule {}
