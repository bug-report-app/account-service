import { AccountModel } from '../models/account.model';

export interface IAccount {
  name: string | undefined;
  email: string | undefined;
  password: string | undefined;

  fromJSON(json: any): AccountModel;
  toJSON(): any;
}
