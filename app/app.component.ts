import { Component, OnInit } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';

import { SidebarComponent } from './views/sidebar/sidebar.component';

import {  CaseService } from './services/case.service';

@Component({
  selector: 'my-app', 
  directives: [ROUTER_DIRECTIVES, SidebarComponent],
  providers: [CaseService],
  //styles: [require('./general.css')],
  template: require('./app.component.html')
})
 
export class AppComponent  implements OnInit {

  showSidebar: boolean;

  constructor(){
 }

 ngOnInit(){
      
   this.showSidebar = true;
 }


}

