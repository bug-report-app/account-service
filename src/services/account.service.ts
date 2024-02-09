import {
  ConflictException,
  HttpException,
  HttpStatus,
  Injectable,
} from '@nestjs/common';
import { AccountRepository } from '../database/repositories/account.repository';
import { AccountModel } from '../domain/models/account.model';
import { NotFoundException } from '../exceptions/NotFound.exception';
import { RabbitMQService } from './rabbitmq.service';

@Injectable()
export class AccountService {
  constructor(
    private readonly accountRepository: AccountRepository,
    private readonly rabbitMQService: RabbitMQService,
  ) {}

  async create(createAccount: any): Promise<any> {
    try {
      const isFound = await this.accountRepository.findByEmail(
        createAccount.email,
      );

      if (!!isFound)
        throw new ConflictException(
          'There is already a record with the data(s) entered',
        );

      const created = await this.accountRepository.create(createAccount);

      const result = new AccountModel().fromJSON(created);

      await this.rabbitMQService.send('createAccount', {
        id: result.id,
        name: result.name,
        email: result.email,
      });

      return result;
    } catch (e) {
      throw new HttpException(e, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  async findAll(): Promise<any[]> {
    const result = await this.accountRepository.findAll();
    return result.map((acc) => new AccountModel().fromJSON(acc));
  }

  async findById(id: string): Promise<any> {
    const result = await this.accountRepository.findById(id);
    if (!result)
      throw new NotFoundException("We couldn't find any user for this id");
    return new AccountModel().fromJSON(result);
  }

  async update(id: string, updateAccount: any): Promise<any> {
    const result = await this.accountRepository.update(id, updateAccount);
    return new AccountModel().fromJSON(result);
  }

  async delete(id: string): Promise<boolean> {
    return await this.accountRepository.delete(id);
  }
}
