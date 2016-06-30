// main entry point

//import 'zone.js';
//import 'reflect-metadata';
//you may need es6-shim if you get an error relating to list.fill
//import es6-shim;

import { bootstrap }            from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { AppComponent }         from './app.component';
import { APP_ROUTER_PROVIDERS } from './app.routes';
import { HTTP_PROVIDERS } from '@angular/http';
import { disableDeprecatedForms, provideForms } from '@angular/forms';

//makes it possible to go to specific app url directly
import { LocationStrategy, HashLocationStrategy } from '@angular/common';


//this is set in our webpack config
if (process.env.ENV === 'production') {
  enableProdMode();
}

bootstrap(AppComponent,  [
  APP_ROUTER_PROVIDERS,
  HTTP_PROVIDERS,
  disableDeprecatedForms(),
  provideForms(),
  { provide: LocationStrategy, useClass: HashLocationStrategy }
])
.catch(err => console.error(err));

//
