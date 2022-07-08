import { StateInterface } from './state-interface';
import { UserInterface } from './UserInterface';

export interface StoreInterface {
  auth: UserInterface;
  data: StateInterface;
}
