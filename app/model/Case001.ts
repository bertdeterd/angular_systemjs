export interface ICase001 {
  caseId: string,
  caseTitle: string
}

export class Case001 {
  constructor(
    public caseId: string,
    public caseTitle: string
  ) {  }
}