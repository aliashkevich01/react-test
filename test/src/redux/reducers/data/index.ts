import { DataActionInterface } from '../../../interfaces/data-action-interface';
import { initialState } from '../state';
import { SORT_BY_NAMING, SORT_BY_NUM } from './actions';

export const dataReducer = (state = initialState, action: DataActionInterface) => {
  switch (action.type) {
    case SORT_BY_NUM: {
      const { registers, isSortedByNum } = {
        registers: state.registers,
        isSortedByNum: state.isSortedByNum,
      };
      const temp = !isSortedByNum;
      const sorted = registers.sort((a, b) => {
        return temp ? b.id - a.id : a.id - b.id;
      });
      return {
        ...state,
        isSortedByNum: !isSortedByNum,
        isSortedByName: false,
        registers: [...sorted],
      };
    }
    case SORT_BY_NAMING: {
      const { registers, isSortedByName } = {
        registers: state.registers,
        isSortedByName: state.isSortedByName,
      };
      const temp = !isSortedByName;
      const sorted = registers.sort((a, b) => {
        if (temp) {
          return a.name > b.name ? 1 : -1;
        } else {
          return a.id > b.id ? 1 : -1;
        }
      });
      return {
        ...state,
        isSortedByNum: false,
        isSortedByName: !isSortedByName,
        registers: [...sorted],
      };
    }
    default:
      return state;
  }
};
