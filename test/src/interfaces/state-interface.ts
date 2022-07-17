import { DocumentInterface } from './document-interface';
import { NewsInterface } from './news-interface';
import { QasInterface } from './qas-interface';
import { RegisterInterface } from './register-interface';

export interface StateInterface {
  news: Array<NewsInterface>;
  registers: Array<RegisterInterface>;
  documents: Array<DocumentInterface>;
  qas: Array<QasInterface>;
  isSortedByNum: boolean;
  isSortedByName: boolean;
}
