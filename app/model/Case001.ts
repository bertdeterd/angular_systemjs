// for use as datatype (dev time only)
export interface ICase001 {
  caseId: string;
  caseTitle: string;
};

// for use as class
export class Case001 {
  constructor(
    public caseId: string,
    public caseTitle: string
  ) {  }
};