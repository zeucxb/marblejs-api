import { combineRoutes } from '@marblejs/core';
import { user$ } from './user';
import { root$ } from './api/root.effect';
import { notFound$ } from './api/not-found.effect';

export const api$ = combineRoutes(
  '/api/v1',
  [root$, user$],
);

export const base$ = combineRoutes(
  '/',
  [notFound$],
);
