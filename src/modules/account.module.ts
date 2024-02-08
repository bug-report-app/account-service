import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Account, AccountSchema } from '../database/schemas/account.schema';
import { AccountController } from '../controllers/account.controller';
import { AccountService } from '../services/account.service';
import { RabbitMQModule } from './rabbitmq.module';
import { AccountRepository } from '../database/repositories/account.repository';

@Module({
  imports: [
    RabbitMQModule,
    MongooseModule.forFeature([{ name: Account.name, schema: AccountSchema }]),
  ],
  controllers: [AccountController],
  providers: [AccountService, AccountRepository],
})
export class AccountModule {}
