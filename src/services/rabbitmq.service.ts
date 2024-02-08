import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';

@Injectable()
export class RabbitMQService {
  constructor(
    @Inject('NOTIFICATION_SERVICE')
    private readonly notificationClient: ClientProxy,
  ) {}

  async send(key: string, data: any): Promise<any> {
    return await new Promise((resolve) => {
      this.notificationClient
        .send(key, data)
        .subscribe((value) => resolve(value));
    });
  }
}
