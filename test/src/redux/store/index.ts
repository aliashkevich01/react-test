import { combineReducers, legacy_createStore } from '@reduxjs/toolkit';
import { authReducer } from '../reducers/auth';
import { dataReducer } from '../reducers/data/index';

const rootReducer = combineReducers({
  auth: authReducer,
  data: dataReducer,
});

export const store = legacy_createStore(rootReducer);
