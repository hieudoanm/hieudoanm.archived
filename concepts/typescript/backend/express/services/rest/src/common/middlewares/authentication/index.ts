import { Request } from 'express';
import jwt, { JwtPayload } from 'jsonwebtoken';
import { UNAUTHORIZED_MESSAGE } from '../../constants';
import { JWT_SECRET } from '../../environments';

const authenticateKey = (request: Request) => {
  const token: string = (request.query.access_token as string) || '';
  return new Promise((resolve, reject) => {
    if (token) {
      resolve({ token });
    } else {
      reject(new Error(UNAUTHORIZED_MESSAGE));
    }
  });
};

const authenticateToken = (request: Request, scopes: string[]) => {
  const token =
    request.body.token ||
    request.query.token ||
    request.headers['x-access-token'];

  return new Promise((resolve, reject) => {
    if (!token) {
      reject(new Error(UNAUTHORIZED_MESSAGE));
    }

    const decoded: JwtPayload = jwt.verify(token, JWT_SECRET) as JwtPayload;

    if (!decoded) {
      reject(new Error(UNAUTHORIZED_MESSAGE));
    }

    for (const scope of scopes) {
      if (!decoded.scopes.includes(scope)) {
        reject(new Error('JWT does not contain required scope.'));
      }
    }

    resolve(decoded);
  });
};

export const expressAuthentication = async (
  request: Request,
  securityName: string,
  scopes: string[] = []
) => {
  if (securityName === 'api_key') {
    return authenticateKey(request);
  }

  if (securityName === 'jwt') {
    return authenticateToken(request, scopes);
  }
};
