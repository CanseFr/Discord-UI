/* tslint:disable */
/* eslint-disable */
import { Channel } from './channel';
import { User } from './user';
export interface Message {
  channel?: Channel;
  content?: string;
  file?: any;
  id?: number;
  sentAt?: string;
  user?: User;
}
