import React, { useState } from 'react';
import { QasInterface } from '../../../interfaces/qas-interface';
import classes from './dropdown.module.css';

export default function Dropdown(props: QasInterface) {
  const [isListExpanded, setIsListExpanded] = useState(false);
  return (
    <div className={classes.qa_container}>
      <div>
        <p className={classes.qa_question}>
          <svg
            onClick={() => {
              setIsListExpanded(!isListExpanded);
            }}
            style={{
              marginRight: '10px',
              transform: isListExpanded ? 'rotate(45deg)' : 'rotate(0deg)',
              transitionDuration: '.45s',
            }}
            className={classes.icon}
            width="22"
            height="22"
            viewBox="0 0 22 22"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1 12C0.447715 12 -4.56684e-07 11.5523 -4.80825e-07 11C-5.04966e-07 10.4477 0.447715 10 0.999999 10L21 10C21.5523 10 22 10.4477 22 11C22 11.5523 21.5523 12 21 12L1 12Z"
              fill="#4D4D4F"
            />
            <path
              d="M12 21C12 21.5523 11.5523 22 11 22C10.4477 22 10 21.5523 10 21L10 1C10 0.447715 10.4477 -4.56684e-07 11 -4.80825e-07C11.5523 -5.04966e-07 12 0.447715 12 0.999999L12 21Z"
              fill="#4D4D4F"
            />
          </svg>
          {props.question}
        </p>
      </div>
      <div>
        <ol className={classes.answer_list} style={{ display: isListExpanded ? 'block' : 'none' }}>
          {props.answer.map((item, idx) => {
            return (
              <li key={idx} className={classes.list_item}>
                {item}
              </li>
            );
          })}
        </ol>
      </div>
    </div>
  );
}
