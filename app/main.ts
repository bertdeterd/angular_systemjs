import { bootstrap }            from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { AppComponent }         from './app.component';
import { APP_ROUTER_PROVIDERS } from './app.routes';
import { HTTP_PROVIDERS } from '@angular/http';
import {  provideForms } from '@angular/forms'; //disableDeprecatedForms,


/* -------------------------------------------------------------
 makes it possible to go to specific app url directly
------------------------------------------------------------- */
import { LocationStrategy, HashLocationStrategy } from '@angular/common';


/* -------------------------------------------------------------
 Production or DEV mode: ENV is set in our webpack config
------------------------------------------------------------- */
if (process.env.ENV === 'production') {
  enableProdMode();
}


bootstrap(AppComponent,  [
  APP_ROUTER_PROVIDERS,
  HTTP_PROVIDERS,
  //disableDeprecatedForms(),
  provideForms(),
  { provide: LocationStrategy, useClass: HashLocationStrategy }
])
.catch(err => console.error(err));
