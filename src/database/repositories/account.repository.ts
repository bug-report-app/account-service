import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Account } from '../schemas/account.schema';

@Injectable()
export class AccountRepository {
  constructor(
    @InjectModel(Account.name) private accountModel: Model<Account>,
  ) {}

  async create(createAccount: any): Promise<Account> {
    const createdAccount = new this.accountModel(createAccount);
    return await createdAccount.save();
  }

  async findAll(): Promise<Account[]> {
    return await this.accountModel.find();
  }

  async findById(id: string): Promise<Account> {
    return await this.accountModel.findOne({ _id: id });
  }

  async update(id: string, updateAccount: any): Promise<Account> {
    return await this.accountModel.findByIdAndUpdate(
      { _id: id },
      updateAccount,
      { new: true },
    );
  }

  async delete(id: string): Promise<any> {
    return await this.accountModel.deleteOne({ _id: id });
  }

  async findByEmail(email: string): Promise<any> {
    return await this.accountModel.findOne({ email });
  }
}
