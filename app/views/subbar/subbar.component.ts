import { Component, OnInit } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';

@Component({
  selector: 'my-app-subbar',
  directives: [ROUTER_DIRECTIVES],
  template: require('./subbar.component.html') 
})

export class SubbarComponent implements OnInit { 
  
 constructor(){
 }

 ngOnInit(){
    console.log('Init SubbarComponent executed');
 }

}

