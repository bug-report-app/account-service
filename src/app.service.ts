import { Injectable } from '@nestjs/common';
import { RabbitMQService } from './RabbitMQ/rabbitmq.service';

@Injectable()
export class AppService {
  constructor(private readonly rabbitMQService: RabbitMQService) {}

  async getHello(): Promise<string> {
    const result = await this.rabbitMQService.send('testando', {
      teste: 'teste',
    });
    console.log('RESULT', result);
    return 'Hello World Account!';
  }
}
