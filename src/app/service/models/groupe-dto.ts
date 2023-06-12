/* tslint:disable */
/* eslint-disable */
import { User } from './user';
export interface GroupeDto {
  id?: number;
  idUserToAdd?: number;
  name: string;
  user?: Array<User>;
}
