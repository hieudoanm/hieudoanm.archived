import { Request, Response } from 'express';
import { ValidateError } from 'tsoa';
import { errorHandler } from '..';

describe('errorHandler', () => {
  const mockResponse = (): Response => {
    const response: Response = {} as Response;
    response.status = jest.fn().mockReturnValue(response);
    response.json = jest.fn().mockReturnValue(response);
    return response;
  };

  it('should return validate error', () => {
    const error = new ValidateError({}, 'error message');
    const mockedRequest = {} as Request;
    const mockedResponse = mockResponse();
    const nextFunction = jest.fn();

    errorHandler(error, mockedRequest, mockedResponse, nextFunction);

    expect(mockedResponse.status).toHaveBeenCalled();
    expect(mockedResponse.json).toHaveBeenCalled();
  });

  it('should return error', () => {
    const error = new Error('error message');
    const mockedRequest = {} as Request;
    const mockedResponse = mockResponse();
    const nextFunction = jest.fn();

    errorHandler(error, mockedRequest, mockedResponse, nextFunction);

    expect(mockedResponse.status).toHaveBeenCalled();
    expect(mockedResponse.json).toHaveBeenCalled();
  });

  it('should return error', () => {
    const error = new Error();
    const mockedRequest = {} as Request;
    const mockedResponse = mockResponse();
    const nextFunction = jest.fn();

    errorHandler(error, mockedRequest, mockedResponse, nextFunction);

    expect(mockedResponse.status).toHaveBeenCalled();
    expect(mockedResponse.json).toHaveBeenCalled();
  });

  it('should continue', () => {
    const mockedRequest = {} as Request;
    const mockedResponse = mockResponse();
    const nextFunction = jest.fn();

    errorHandler(undefined, mockedRequest, mockedResponse, nextFunction);

    expect(nextFunction).toHaveBeenCalled();
  });
});
