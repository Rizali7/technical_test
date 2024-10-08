import { ArgumentsHost, ExceptionFilter, HttpException } from '@nestjs/common';
import { Response } from 'express';
export declare class HttpExceptionFilter implements ExceptionFilter {
    private readonly logger;
    catch(error: HttpException, host: ArgumentsHost): Response<any, Record<string, any>>;
}
