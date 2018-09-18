import { combineRoutes } from '@marblejs/core';
import { authorize$ } from '../../middlewares/auth.middleware';
import { getUsers$ } from './list-users.effect';
import { postUser$ } from './create-user.effect';

export const user$ = combineRoutes('/user', {
  middlewares: [authorize$],
  effects: [getUsers$, postUser$],
});
