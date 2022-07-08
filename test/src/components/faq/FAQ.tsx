import React from 'react';
import { useSelector } from 'react-redux';
import { StoreInterface } from '../../interfaces/store-interface';
import Dropdown from './dropdown/Dropdown';
import classes from './faq.module.css';

export default function FAQ() {
  const qas = useSelector((state: StoreInterface) => {
    return state.data.qas;
  });
  return (
    <div className={classes.faq_container}>
      <div className={classes.faq_content}>
        <div className={classes.left_item}>
          <h3 className={classes.faq_header}>Вопрос-ответ</h3>
        </div>
        <div className={classes.right_item}>
          {qas.map((qa, idx) => {
            return <Dropdown key={idx} question={qa.question} answer={qa.answer} />;
          })}
        </div>
      </div>
    </div>
  );
}
