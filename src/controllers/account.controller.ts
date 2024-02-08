import { Controller, Post, Req } from '@nestjs/common';
import { AccountService } from '../services/account.service';
import { Request } from 'express';

@Controller('accounts')
export class AccountController {
  constructor(private readonly accountService: AccountService) {}

  @Post()
  async create(@Req() request: Request): Promise<string> {
    return await this.accountService.create(request.body);
  }
}
