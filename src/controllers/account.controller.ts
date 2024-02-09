import {
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Req,
} from '@nestjs/common';
import { AccountService } from '../services/account.service';
import { Request } from 'express';

@Controller('accounts')
export class AccountController {
  constructor(private readonly accountService: AccountService) {}

  @Post()
  async create(@Req() request: Request): Promise<any> {
    const result = await this.accountService.create(request.body);
    return result;
  }

  @Get()
  async findAll(): Promise<any[]> {
    const result = await this.accountService.findAll();
    return result;
  }

  @Get(':id')
  async findById(@Param('id') id: string): Promise<any> {
    const result = await this.accountService.findById(id);
    return result;
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Req() request: Request): Promise<any> {
    const result = await this.accountService.update(id, request.body);
    return result;
  }

  @Delete(':id')
  async delete(@Param('id') id: string): Promise<boolean> {
    const result = await this.accountService.delete(id);
    return result;
  }
}
