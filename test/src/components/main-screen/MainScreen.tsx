import React from 'react';
import SearchBar from '../search-bar/SearchBar';
import classes from './main-screen.module.css';

export default function MainScreen() {
  return (
    <div className={classes.main_screen_container}>
      <div className={classes.main_screen_content}>
        <div className={classes.main_info}>
          <h1 className={classes.main_header}>РЕЕСТР ПРОГРАММНОГО ОБЕСПЕЧЕНИЯ</h1>
          <p className={classes.main_text}>
            Единый реестр программ для электронных вычислительных машин и баз данных
          </p>
          <p className={classes.main_text}>
            Включено ПО в реестр:<span className={classes.main_count}> 13 438</span>
            <br />
            Правообладателей:<span className={classes.main_count}> 4 272</span>
          </p>
          <div className={classes.search_panel}>
            <SearchBar placeholder="Искать в реестре"></SearchBar>
            <button className={classes.search_btn}>Искать</button>
          </div>
        </div>
        <div className={classes.main_image}>
          <img src="/main-image.png" alt="main img" className={classes.main_image}></img>
        </div>
      </div>
    </div>
  );
}
