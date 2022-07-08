import React from 'react';
import { useSelector } from 'react-redux';
import { initialFlexStyle, initialLinkStyle } from '../../constants';
import { StoreInterface } from '../../interfaces/store-interface';
import classes from './documents.module.css';

export default function Documents() {
  const docs = useSelector((state: StoreInterface) => {
    return state.data.documents;
  });
  return (
    <div className={classes.documents_container}>
      <div className={classes.documents_content}>
        <h2 className={classes.documents_header}>Документы</h2>
        <p className={classes.documents_total_text}>
          Всего документов:
          <span className={classes.documents_count}> 5</span>
        </p>
        <table className={classes.documents_table}>
          <thead className={classes.documents_info_header}>
            <tr>
              <th className={classes.documents_info_header_item}>Категория</th>
              <th className={classes.documents_info_header_item} style={{ width: '390px' }}>
                Наименование
              </th>
              <th className={classes.documents_info_header_item}>Дата</th>
              <th className={classes.documents_info_header_item}>Номер</th>
              <th className={classes.documents_info_header_item} style={initialFlexStyle}>
                <svg
                  style={{ marginRight: '10px' }}
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M20.13 8.70996L15.2 3.77997C14.7 3.27997 14.02 3 13.31 3H8.92004C5.61004 3 2.92004 5.69 2.92004 9V15C2.92004 18.31 5.61004 21 8.92004 21H14.92C18.23 21 20.92 18.31 20.92 15V10.61C20.92 9.89999 20.64 9.21997 20.14 8.71997L20.13 8.70996ZM14.66 6.07001L17.85 9.26001H16.26C15.38 9.26001 14.66 8.59001 14.66 7.76001V6.07001ZM14.91 18.99H8.91003C6.70003 18.99 4.91003 17.2 4.91003 14.99V8.98999C4.91003 6.77999 6.70003 4.98999 8.91003 4.98999H12.65V7.76001C12.65 9.69001 14.27 11.26 16.25 11.26H18.9V14.99C18.9 17.2 17.11 18.99 14.9 18.99H14.91Z"
                    fill="#009CB4"
                  />
                </svg>
                Содержание
              </th>
            </tr>
          </thead>
          <tbody>
            {docs.map((item) => {
              return (
                <tr key={item.id}>
                  <td className={classes.documents_info_item}>
                    <p>{item.category}</p>
                  </td>
                  <td className={classes.documents_info_item}>
                    <p className={classes.info_class}>{item.name}</p>
                  </td>
                  <td className={classes.documents_info_item}>
                    <p>{item.date}</p>
                  </td>
                  <td className={classes.documents_info_item}>
                    <p>{item.id}</p>
                  </td>
                  <td className={classes.documents_info_item}>
                    <div style={initialFlexStyle}>
                      <div>
                        <svg
                          style={{ marginRight: '10px' }}
                          width="32"
                          height="32"
                          viewBox="0 0 32 32"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M14.7999 23.48C14.9865 23.6666 15.2132 23.7866 15.4532 23.8666C15.6265 23.9466 15.8132 24 16.0132 24C16.2132 24 16.3999 23.9466 16.5599 23.8666C16.7999 23.7866 17.0265 23.6666 17.2132 23.48L24.2132 16.4666C24.7332 15.9466 24.7332 15.1067 24.2132 14.5867C23.6932 14.0667 22.8532 14.0667 22.3332 14.5867L17.3599 19.5867V4.01335C17.3599 3.28001 16.7732 2.68001 16.0265 2.68001C15.2799 2.68001 14.6932 3.28001 14.6932 4.01335V19.5867L9.70652 14.5999C9.18652 14.0799 8.34652 14.0799 7.82652 14.5999C7.30652 15.1199 7.30652 15.96 7.82652 16.48L14.8265 23.4933L14.7999 23.48Z"
                            fill="#009CB4"
                          />
                          <path
                            d="M25.333 24C24.5997 24 23.9997 24.6 23.9997 25.3333C23.9997 26.2133 23.1997 26.68 22.453 26.68H9.51967C8.75967 26.68 7.99967 26.2133 7.99967 25.3333C7.99967 24.6 7.39967 24 6.66634 24C5.93301 24 5.33301 24.6 5.33301 25.3333C5.33301 27.5867 7.17301 29.3467 9.51967 29.3467H22.453C24.813 29.3467 26.6663 27.5867 26.6663 25.3333C26.6663 24.6 26.0663 24 25.333 24Z"
                            fill="#009CB4"
                          />
                        </svg>
                      </div>
                      <div>
                        <a href="/" style={initialLinkStyle}>
                          Скачать <br></br>({item.size})
                        </a>
                      </div>
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
