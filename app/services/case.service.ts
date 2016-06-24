import { Injectable } from '@angular/core';
import { ICase001 } from '../model/Case001';

@Injectable()
export class CaseService {

    getCases(): ICase001[] {
        return [
            {
                caseId: '1' ,
                caseTitle: 'Hallo 1'
            },
               {
                caseId: '2' ,
                caseTitle: 'Hallo 2'
            }
        ];
    }

}
