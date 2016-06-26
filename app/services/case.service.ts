/*
Credits to:
- https://coryrylan.com/blog/angular-2-observable-data-services
*/

import { Injectable } from '@angular/core';
import { ICase001 } from '../model/Case001';
import { Http } from '@angular/http';
//import { Https } from '@angular/https';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class CaseService {

  private _cases$: Subject<ICase001[]>;
   
  //internal datastore which holds all the data 
  private _dataStore: {
    cases: ICase001[]
  };

  constructor(private _http:Http){
    //initialize our DS
    this._dataStore = { cases: [] };
    //Subject is a special type of an Observable which allows us to push and pull values to the underlying Observable 
    this._cases$ = <Subject<ICase001[]>>new Subject();
  }

   //Observable stream to subscribe to by components
   get cases$() {   
    return this._cases$.asObservable();
  }

  getCases() {
    this._http.get(`https://private-dbeab6-casedata.apiary-mock.com/cases`).map(response => response.json())
        .subscribe(data => {
                //update internal datastore
                this._dataStore.cases = data;
                //push data to subject cases$
                //any component subscribed to our public cases$ Observable stream will get a value pushed.
                this._cases$.next(this._dataStore.cases);
    }, error => console.log('Could not load cases.'));
  }

}
