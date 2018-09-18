import { HttpRequest } from '@marblejs/core';
import jwt from 'jsonwebtoken';

const SECRET_KEY = '@P4sSw0rd';

export const encodeToken = (obj: any): string =>
  jwt.sign(obj, SECRET_KEY);

export const decodeToken = (token: string): any =>
  jwt.verify(token, SECRET_KEY);

export const isAuthorized = (request: HttpRequest) => {
  const user = decodeToken(request.headers.authorization as string);

  return user
    ? user.id === 'id'
    : false;
};
