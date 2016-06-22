import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';

//var view = require( './app.component.html');

@Component({
  selector: 'my-app', 
  directives: [ROUTER_DIRECTIVES],
  template: require('./app.component.html')
  //templateUrl: './app/app.component.html'
})
export class AppComponent { }

