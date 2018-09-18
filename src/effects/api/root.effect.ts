import { EffectFactory } from '@marblejs/core';
import { map } from 'rxjs/operators';

export const root$ = EffectFactory
  .matchPath('/')
  .matchType('GET')
  .use(req$ => req$.pipe(
    map(req => ({
      body: `API root @ ${req.url}`,
    })),
  ));
