import { DataActionInterface } from '../../../interfaces/data-action-interface';
import { initialState } from '../state';
import { SORT_BY_NUM } from './actions';

export const dataReducer = (state = initialState, action: DataActionInterface) => {
  switch (action.type) {
    case SORT_BY_NUM: {
      const { registers, isSortedByNum } = {
        registers: state.registers,
        isSortedByNum: state.isSortedByNum,
      };
      const sorted = registers.sort((a, b) => {
        return isSortedByNum ? b.id - a.id : a.id - b.id;
      });
      return {
        ...state,
        isSortedByNum: !isSortedByNum,
        registers: [...sorted],
      };
    }
    default:
      return state;
  }
};
