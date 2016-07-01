import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';

@Component({
  selector: 'my-start',
  directives: [ROUTER_DIRECTIVES],
  template: require('./start.component.html') //'app/start/start.component.html'
})
export class StartComponent { }

