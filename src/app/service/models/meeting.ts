/* tslint:disable */
/* eslint-disable */
import { Channel } from './channel';
import { User } from './user';
export interface Meeting {
  channel?: Channel;
  dateTime?: string;
  duration?: number;
  id?: number;
  name?: string;
  sentAt?: string;
  user?: User;
}
