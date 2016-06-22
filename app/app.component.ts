import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';

@Component({
  selector: 'my-app', 
  directives: [ROUTER_DIRECTIVES],
  styles: [`.fullheight { height:100%;}` ],
  template: require('./app.component.html')
})

export class AppComponent  {}

