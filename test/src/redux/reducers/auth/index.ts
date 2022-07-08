import { UserActionInterface } from '../../../interfaces/user-action-interface';
import { UserInterface } from '../../../interfaces/UserInterface';
import { AUTH, AUTH_EXIT, UPDATE_USER } from './actions';

const initialState: UserInterface = {
  isAuthorized: false,
  name: 'Захар',
  surname: 'Палазник',
  patronymic: 'Геннадьевич',
  country: 'Беларусь',
  city: 'Минск',
  phone: '+375221113344',
  password: 'zakharpalaznik',
};

export const authReducer = (state = initialState, action: UserActionInterface) => {
  switch (action.type) {
    case AUTH: {
      return {
        ...state,
        isAuthorized: true,
      };
    }
    case UPDATE_USER: {
      const { name, surname, patronymic, password, phone, city, country } = action.payload;
      return {
        ...state,
        name,
        surname,
        patronymic,
        password,
        phone,
        city,
        country,
      };
    }
    case AUTH_EXIT: {
      return {
        ...state,
        isAuthorized: false,
      };
    }
    default:
      return state;
  }
};
