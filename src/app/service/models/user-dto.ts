/* tslint:disable */
/* eslint-disable */
import { Role } from './role';
export interface UserDto {
  active?: boolean;
  channel?: string;
  email: string;
  firstname: string;
  groupe?: string;
  id?: number;
  lastname: string;
  notificationList?: Array<any>;
  password: string;
  roles?: Array<Role>;
}
