import { NextFunction, Request, Response } from 'express';
import { ValidateError } from 'tsoa';
import { INTERNAL_SERVER_ERROR_MESSAGE } from '../../constants';

export const errorHandler = (
  error: Error | ValidateError | undefined,
  _request: Request,
  response: Response,
  next: NextFunction
): Response | void => {
  if (error instanceof ValidateError) {
    return response.status(422).json({
      message: 'Validation Failed',
      details: error.fields
    });
  }

  if (error instanceof Error) {
    return response.status(500).json({
      message: error.stack ?? error.message ?? INTERNAL_SERVER_ERROR_MESSAGE
    });
  }

  next();
};

export default errorHandler;
