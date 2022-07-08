import React from 'react';
import classes from './search-bar.module.css';

export default function SearchBar(props: { placeholder?: string }) {
  return (
    <div className={classes.search_bar + ''}>
      <button className={classes.search_button}>
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M19.81 18.35L16.91 15.45C18 14.05 18.59 12.34 18.59 10.54C18.59 8.39 17.75 6.37 16.23 4.85C13.1 1.71 7.99001 1.71 4.86 4.85C1.72 7.99 1.72 13.09 4.86 16.22C6.38 17.74 8.4 18.58 10.55 18.58C12.37 18.58 14.1 17.97 15.5 16.87L18.4 19.77C18.6 19.97 18.85 20.06 19.11 20.06C19.37 20.06 19.62 19.96 19.82 19.77C20.21 19.38 20.21 18.75 19.82 18.36L19.81 18.35ZM6.27 14.81C3.91 12.45 3.91 8.62 6.27 6.27C7.45 5.09 9 4.5 10.54 4.5C12.08 4.5 13.63 5.09 14.81 6.27C15.99 7.45 16.58 8.93 16.58 10.54C16.58 12.15 15.95 13.67 14.81 14.81C13.67 15.95 12.15 16.58 10.54 16.58C8.93 16.58 7.41 15.95 6.27 14.81V14.81Z"
            fill="#C6C6C6"
          />
        </svg>
      </button>
      <input
        className={classes.search_input}
        type="text"
        placeholder={props.placeholder ? props.placeholder : 'Поиск'}
        maxLength={100}
      />
    </div>
  );
}
