import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Account } from '../schemas/account.schema';

@Injectable()
export class AccountRepository {
  constructor(@InjectModel(Account.name) private catModel: Model<Account>) {}

  async create(createAccount: any): Promise<Account> {
    const createdAccount = new this.catModel(createAccount);
    return await createdAccount.save();
  }

  async findAll(): Promise<Account[]> {
    return this.catModel.find().exec();
  }
}
