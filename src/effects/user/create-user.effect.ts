import { EffectFactory, use } from '@marblejs/core';
import { validator$, Joi } from '@marblejs/middleware-joi';
import { map, switchMap } from 'rxjs/operators';

import { createUser } from '../../resolvers/user/create-user.resolver';

export const postUser$ = EffectFactory
  .matchPath('/')
  .matchType('POST')
  .use(req$ => req$.pipe(
    use(validator$({
      body: Joi.object({
        firstName: Joi.string().required(),
        lastName: Joi.string().required(),
      }),
    })),
    map(req => req.body),
    switchMap(createUser),
    map(response => ({ body: response })),
  ));
