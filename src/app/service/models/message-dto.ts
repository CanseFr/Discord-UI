/* tslint:disable */
/* eslint-disable */
import { Channel } from './channel';
import { User } from './user';
export interface MessageDto {
  channel?: Channel;
  channelId?: number;
  content: string;
  file?: any;
  id?: number;
  sentAt?: string;
  user?: User;
  userId?: number;
  userLastname?: string;
}
