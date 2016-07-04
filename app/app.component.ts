import { Component, OnInit } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';
import { SubbarComponent } from './views/subbar/subbar.component';
import { CaseService } from './services/case.service';

@Component({
  selector: 'my-app', 
  directives: [ROUTER_DIRECTIVES, SubbarComponent],
  providers: [CaseService],
  //styles: [require('raw!./general-test.css')],//DOET HET
  template: require('./app.component.html')
})
 
export class AppComponent  implements OnInit {

  showSubbar: boolean;

  constructor(){
 }

 ngOnInit(){
      
   this.showSubbar = false;
 }


}

