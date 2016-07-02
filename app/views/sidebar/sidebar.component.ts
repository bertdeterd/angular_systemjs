import { Component, OnInit } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';

@Component({
  selector: 'my-app-sidebar',
  directives: [ROUTER_DIRECTIVES],
  template: require('./sidebar.component.html') 
})

export class SidebarComponent implements OnInit { 
  
 constructor(){
 }

 ngOnInit(){
    console.log('Init SidebarComponent executed');
 }

}

