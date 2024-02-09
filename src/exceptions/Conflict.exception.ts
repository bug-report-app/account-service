import { HttpException, HttpStatus } from '@nestjs/common';

export class ConflictException extends HttpException {
  constructor(description?: string) {
    super(
      { statusCode: HttpStatus.CONFLICT, error: 'Not found', description },
      HttpStatus.CONFLICT,
    );
  }
}
