import { Component, OnInit } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';
import { CaseService  } from '../../services/case.service';
import { ICase001 } from '../../model/Case001';

@Component({
  //selector: 'my-app',
  directives: [ROUTER_DIRECTIVES],
  template: require('./second.component.html') //'app/second/second.component.html'
})
export class SecondComponent implements OnInit { 

  cases: ICase001[];
 
 constructor(private _caseService:CaseService){

 }

 ngOnInit(){
   this.cases = this._caseService.getCases();
 }


}

