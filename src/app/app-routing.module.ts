import { MyProfileComponent } from './my-profile/my-profile.component';
import { AuthGuard } from './AuthGuard.service';
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
      component: ToDoListComponent,
      canActivate: [AuthGuard],
      children: [
        {
          path: 'createnewtask',
          component: PageNotFoundComponent
        },
        {
          path: 'my-profile',
          component: MyProfileComponent
        },
        {
          path: 'logout',
          redirectTo: '/login',
          pathMatch: 'prefix'
        },
      ]
    },
    {
      path: '**',
      component: PageNotFoundComponent
    }
  ];


@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [RouterModule]
})

export class RoutingModule {}
