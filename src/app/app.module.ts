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

/* import Components */
import { AppComponent } from './app.component';
import { ComponentsArray } from './app-routing.module';

/* import Services */
import { LogRegService } from './log-reg.service';

@NgModule({
  declarations: [
    AppComponent,
    ComponentsArray
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    FireBaseModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    RoutingModule,
    AngularMaterialModule
  ],
  providers: [LogRegService],
  bootstrap: [AppComponent]
})
export class AppModule { }
