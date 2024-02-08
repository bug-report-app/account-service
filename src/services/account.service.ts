import { Injectable } from '@nestjs/common';
import { AccountRepository } from '../database/repositories/account.repository';

@Injectable()
export class AccountService {
  constructor(private readonly accountRepository: AccountRepository) {}

  async create(createAccount: any): Promise<any> {
    const result = await this.accountRepository.create(createAccount);
    return result;
  }
}
