import { StateInterface } from './state-interface';

export interface DataActionInterface {
  type: string;
  payload: StateInterface;
}
