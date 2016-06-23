import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';
import { Case001 } from '../model/Case001';

@Component({
  //selector: 'my-app',
  directives: [ROUTER_DIRECTIVES],
  template: require('./one.component.html')
})

export class OneComponent {

  onSubmit() {

  }

}

