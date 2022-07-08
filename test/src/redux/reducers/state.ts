import { StateInterface } from '../../interfaces/state-interface';
import { initialDocuments, initialNews, initialQas, initialRegisters } from './data/initials';

export const initialState: StateInterface = {
  news: initialNews,
  registers: initialRegisters,
  documents: initialDocuments,
  qas: initialQas,
  isSortedByNum: false,
};
