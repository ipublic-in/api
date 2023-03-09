import { NestMiddleware } from '@nestjs/common';
import { NextFunction, Request, Response } from 'express';
import { ApiTokenPaymentException } from '../exceptions/api-token-payement.exception';

export class ApiTokenCheckMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    if (req.headers['api-token'] !== process.env.APPLICATION_API_TOKEN) {
      throw new ApiTokenPaymentException();
    }
    next();
  }
}
