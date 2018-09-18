import { EffectFactory } from '@marblejs/core';
import { map, switchMap } from 'rxjs/operators';
import { listUsers } from '../../resolvers/user/list-users.resolver';

export const getUsers$ = EffectFactory
  .matchPath('/')
  .matchType('GET')
  .use(req$ => req$.pipe(
    switchMap(listUsers),
    map(users => ({ body: users })),
  ));
