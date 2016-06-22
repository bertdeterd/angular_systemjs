import { provideRouter, RouterConfig } from '@angular/router';
import { AppComponent }         from './app.component';
import { StartComponent }         from './start/start.component';
import { SecondComponent }         from './second/second.component';

export const routes: RouterConfig = [
  { path: 'home', component: StartComponent },
  { path: 'second', component: SecondComponent },
  { path: '', component: StartComponent }
 
];

export const APP_ROUTER_PROVIDERS = [
  provideRouter(routes)
];
