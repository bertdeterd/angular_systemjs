import { provideRouter, RouterConfig }  from '@angular/router';
import { AppComponent }                 from './app.component';
import { StartComponent }               from './views/start/start.component';
import { OneComponent }                 from './views/one/one.component';
import { SecondComponent }              from './views/second/second.component';

export const routes: RouterConfig = [
  { path: 'one', component: OneComponent },
  { path: 'second', component: SecondComponent },
  { path: '', component: StartComponent }
];

export const APP_ROUTER_PROVIDERS = [
  provideRouter(routes)
];
