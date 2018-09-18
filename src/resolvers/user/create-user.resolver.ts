import { of } from 'rxjs';

export const createUser = (data: any) => of({
  data,
});