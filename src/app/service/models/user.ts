/* tslint:disable */
/* eslint-disable */
import { Notification } from './notification';
import { Role } from './role';
export interface User {
  accountNonExpired?: boolean;
  accountNonLocked?: boolean;
  active?: boolean;
  authorities?: Array<any>;
  credentialsNonExpired?: boolean;
  email?: string;
  enabled?: boolean;
  firstname?: string;
  id?: number;
  lastname?: string;
  notificationList?: Array<Notification>;
  password?: string;
  roles?: Array<Role>;
  username?: string;
}
