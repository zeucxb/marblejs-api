import { of } from 'rxjs';

export const listUsers = () => of([
  { id: '1', firstName: 'Bob', lastName: 'Collins' },
  { id: '2', firstName: 'Sara', lastName: 'Rodriguez' },
  { id: '3', firstName: 'Adam', lastName: 'Wayne' },
]);
