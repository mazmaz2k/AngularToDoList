import { ShowNamePipe } from './show-name.pipe';
import { UsersService } from './users/users.service';
import { ReversePipe } from './reverse.pipe';
import { ShowAllTasksComponent } from './show-all-tasks/show-all-tasks.component';
import { PushService } from './push/push.service';
import { CreateItemComponent } from './create-item/create-item.component';

/* import Gesture Support */
import 'hammerjs';

/* import Modules */
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RoutingModule } from './app-routing.module';
import { FireBaseModule } from './firebase.module';
import { AngularMaterialModule } from './angular-material.module';

import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';

/* import Components */
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { ToDoListComponent } from './to-do-list/to-do-list.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { RegistrationComponent } from './registration/registration.component';
import { ToDoItemComponent } from './to-do-item/to-do-item.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { MyProfileComponent } from './my-profile/my-profile.component';
import { BsDropdownModule } from 'ngx-bootstrap';

/* import Services */
import { LogRegService } from './log-reg.service';
import { AuthGuard } from './AuthGuard.service';


import 'rxjs/add/observable/fromPromise';
import 'rxjs/add/operator/map';

@NgModule({
  declarations: [
    AppComponent,
    LoginFormComponent,
    RegistrationComponent,
    ToDoItemComponent,
    ToDoListComponent,
    PageNotFoundComponent,
    NavComponent,
    MyProfileComponent,
    CreateItemComponent,
    ShowAllTasksComponent,
    ReversePipe,
    ShowNamePipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    FireBaseModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    RoutingModule,
    AngularMaterialModule,
    BsDropdownModule.forRoot(),
    BsDatepickerModule.forRoot()
  ],
  providers: [LogRegService, AuthGuard, PushService, UsersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
