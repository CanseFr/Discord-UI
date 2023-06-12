/* tslint:disable */
/* eslint-disable */
import { Channel } from './channel';
export interface Notification {
  channel?: Channel;
  id?: number;
  seen?: boolean;
  seenAt?: string;
}
