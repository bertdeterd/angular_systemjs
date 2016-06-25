import { Component, OnInit } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';
import { CaseService  } from '../../services/case.service';
import { ICase001 } from '../../model/Case001';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'my-app-cases',
  directives: [ROUTER_DIRECTIVES],
  template: require('./second.component.html') 
})
export class SecondComponent implements OnInit { 
  cases$: Observable<ICase001[]>;
 
 constructor(private _caseService:CaseService){
 }

 ngOnInit(){
   this.cases$ = this._caseService.cases$; //subscribe to cases$ collection
   this._caseService.getCases();
   console.log('Init called');
 }

}

