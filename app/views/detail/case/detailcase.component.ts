import { Component, OnInit } from '@angular/core';
import { ROUTER_DIRECTIVES, ActivatedRoute  } from '@angular/router';
//import { Case001, ICase001 } from '../../model/Case001';
import { NgForm }    from '@angular/common';

@Component({
  //selector: 'my-app',
  directives: [ROUTER_DIRECTIVES],
  template: require('./detailcase.component.html') //kudos for webpack: require can use relative url
})

export class DetailCaseComponent implements OnInit {

  caseID: string;

  constructor(
    private _route: ActivatedRoute
  ){}

 ngOnInit() {
    this._route.params
      .map(params => params['id'])
      .subscribe((id) => {
        console.log(id);
        this.caseID = id;
       // this.contactsService
        //  .getContact(id)
        //  .subscribe(contact => this.contact = contact);
      });
  }
  

  //model = new Case001('1', 'My First Case');

 

  // TODO: Remove this when we're done
  //get diagnostic() { return JSON.stringify(this.model); }

}

