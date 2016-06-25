// main entry point
import { bootstrap }            from '@angular/platform-browser-dynamic';
import { AppComponent }         from './app.component';
import { APP_ROUTER_PROVIDERS } from './app.routes';
import { HTTP_PROVIDERS } from '@angular/http';
import { disableDeprecatedForms, provideForms } from '@angular/forms';

//makes it possible to go to specific app url directly
import { LocationStrategy, HashLocationStrategy } from '@angular/common';

bootstrap(AppComponent,  [
  APP_ROUTER_PROVIDERS,
  HTTP_PROVIDERS,
  disableDeprecatedForms(),
  provideForms(),
  { provide: LocationStrategy, useClass: HashLocationStrategy }
])
.catch(err => console.error(err));

//
