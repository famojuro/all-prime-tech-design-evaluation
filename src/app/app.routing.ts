import {Routes} from "@angular/router";
import {DevicesComponent} from "./devices/devices.component";
import {HelpCenterComponent} from "./help-center/help-center.component";
import {HomeComponent} from "./home/home.component";

export const AppRoutes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch:'full'
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'devices',
    component: DevicesComponent
  },
  {
    path: 'help-center',
    component: HelpCenterComponent
  },
  {
    path: '**',
    redirectTo: 'home'
  }
];
