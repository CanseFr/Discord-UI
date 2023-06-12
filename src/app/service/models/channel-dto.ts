/* tslint:disable */
/* eslint-disable */
import { Meeting } from './meeting';
import { Message } from './message';
import { User } from './user';
export interface ChannelDto {
  id?: number;
  meetings?: Array<Meeting>;
  member_user?: Array<User>;
  messages?: Array<Message>;
  name: string;
  subscribe_user?: Array<User>;
  visibility: string;
}
