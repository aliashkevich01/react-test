import React from 'react';
import { useSelector } from 'react-redux';
import { NewsInterface } from '../../interfaces/news-interface';
import { StoreInterface } from '../../interfaces/store-interface';
import NewsCard from './news-card/NewsCard';
import classes from './news.module.css';

export default function News() {
  const NEWS: Array<NewsInterface> = useSelector((state: StoreInterface) => state.data.news);
  return (
    <div className={classes.news_container}>
      <div className={classes.news_content}>
        <h2 className={classes.news_header}>Новости реестра</h2>
        <div className={classes.grid_container}>
          {NEWS.map((info, idx) => {
            return (
              <NewsCard
                key={idx}
                url={info.url}
                header={info.header}
                description={info.description}
                date={info.date}
              />
            );
          })}
        </div>
        <div className={classes.bottom}>
          <button className={classes.show_btn}>Показать все</button>
        </div>
      </div>
    </div>
  );
}
