import { HttpException, HttpStatus } from '@nestjs/common';

export class NotFoundException extends HttpException {
  constructor(description?: string) {
    super(
      { statusCode: HttpStatus.NOT_FOUND, error: 'Not found', description },
      HttpStatus.NOT_FOUND,
    );
  }
}
