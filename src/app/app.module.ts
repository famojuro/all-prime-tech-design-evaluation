import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DevicesComponent } from './devices/devices.component';
import {RouterModule} from "@angular/router";
import {AppRoutes} from "./app.routing";
import { HelpCenterComponent } from './help-center/help-center.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    DevicesComponent,
    HelpCenterComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(AppRoutes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
