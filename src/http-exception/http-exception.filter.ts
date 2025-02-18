import { ArgumentsHost, Catch, ExceptionFilter, HttpException } from '@nestjs/common';
import {  Request, Response } from 'express' 

@Catch()
export class HttpExceptionFilter implements ExceptionFilter {
  catch(exception: HttpException, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const request = ctx.getRequest<Request>();
    const status = exception.getStatus();
    const message = exception.message ? exception.message : "Server error";

    response.status(status).json({
      code: -1,
      message,
      path: request.url,
    });

  }
}
