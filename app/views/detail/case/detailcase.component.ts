import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';
//import { Case001, ICase001 } from '../../model/Case001';
import { NgForm }    from '@angular/common';

@Component({
  //selector: 'my-app',
  directives: [ROUTER_DIRECTIVES],
  template: require('./detailcase.component.html') //kudos for webpack: require can use relative url
})

export class DetailCaseComponent {

  //model = new Case001('1', 'My First Case');

 

  // TODO: Remove this when we're done
  //get diagnostic() { return JSON.stringify(this.model); }

}
