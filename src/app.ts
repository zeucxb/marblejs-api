import { httpListener } from '@marblejs/core';
import { bodyParser$ } from '@marblejs/middleware-body';
import { logger$ } from '@marblejs/middleware-logger';
import { api$, base$ } from './effects';

const middlewares = [
  logger$,
  bodyParser$,
];

const effects = [
  api$,
  base$,
];

export const app = httpListener({ middlewares, effects });
