import { UserInterface } from './UserInterface';

export interface UserActionInterface {
  type: string;
  payload: UserInterface;
}
