import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';

import {  CaseService } from './services/case.service';

@Component({
  selector: 'my-app', 
  directives: [ROUTER_DIRECTIVES],
  providers: [CaseService],
  //styles: [`.fullheight { height:100%;}` ],
  template: require('./app.component.html')
})

export class AppComponent  {}

