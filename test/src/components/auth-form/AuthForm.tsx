import React, { FormEvent, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import { MAIN_PATH, USER_PATH } from '../../constants';
import { StoreInterface } from '../../interfaces/store-interface';
import { AUTH } from '../../redux/reducers/auth/actions';
import classes from './auth-form.module.css';

export default function AuthForm() {
  const { name, password } = useSelector((state: StoreInterface) => {
    return { name: state.auth.name, password: state.auth.password };
  });
  const dispatch = useDispatch();
  const [inputName, setInputName] = useState('');
  const [inputPassword, setInputPassword] = useState('');
  const navigate = useNavigate();
  const handleClick = () => {
    if (name === inputName && password === inputPassword) {
      dispatch({
        type: AUTH,
      });
      navigate(USER_PATH);
    }
  };
  const validateValue = (e: FormEvent<HTMLInputElement>, value: string) => {
    const target = e.target as HTMLInputElement;
    const node = target.parentNode as HTMLDivElement;
    if (target.value !== value) {
      node.classList.remove(`${classes.right}`);
      node.classList.add(`${classes.wrong}`);
      if (value === password) {
        node.classList.add(`${classes.wrong_password}`);
      }
    } else {
      node.classList.remove(`${classes.wrong}`);
      if (value === password) {
        node.classList.remove(`${classes.wrong_password}`);
      }
      node.classList.add(`${classes.right}`);
    }
  };
  return (
    <div className={classes.auth_container}>
      <nav className={classes.back_to_main}>
        <svg
          onClick={() => {
            navigate(MAIN_PATH);
          }}
          className={classes.back_icon}
          width="24"
          height="25"
          viewBox="0 0 24 25"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M21 11.5H5.27002L10.58 6.2C10.97 5.81 10.97 5.18 10.58 4.79C10.19 4.4 9.55998 4.4 9.16998 4.79L2.40002 11.54C2.16002 11.78 2.04002 12.1 2.02002 12.42C2.02002 12.45 2 12.47 2 12.5C2 12.53 2.01002 12.55 2.02002 12.58C2.04002 12.9 2.16002 13.22 2.40002 13.46L9.16998 20.21C9.36998 20.4 9.62 20.5 9.88 20.5C10.14 20.5 10.39 20.4 10.59 20.21C10.98 19.82 10.98 19.19 10.59 18.8L5.28003 13.51H21.01C21.56 13.51 22.01 13.06 22.01 12.51C22.01 11.96 21.56 11.51 21.01 11.51L21 11.5Z"
            fill="#676A71"
          />
        </svg>
        <p className={classes.back_text}>Главная</p>
      </nav>
      <section className={classes.auth}>
        <div className={classes.auth_content}>
          <h3 className={classes.auth_header}>Авторизация</h3>
          <div className={classes.auth_form}>
            <label htmlFor="name" className={classes.auth_label}>
              Имя
            </label>
            <div className={classes.wrap}>
              <input
                tabIndex={1}
                id="name"
                placeholder="Введите имя"
                className={classes.auth_input}
                onFocus={(e: FormEvent<HTMLInputElement>) => {
                  const target = e.target as HTMLInputElement;
                  target.style.border = '1px solid #009CB4';
                }}
                onChange={(e: FormEvent<HTMLInputElement>) => {
                  setInputName((e.target as HTMLInputElement).value);
                }}
                onBlur={(e: FormEvent<HTMLInputElement>) => {
                  validateValue(e, name);
                }}
              />
            </div>
            <label htmlFor="password" className={classes.auth_label}>
              Пароль
            </label>
            <div className={classes.wrap}>
              <input
                tabIndex={2}
                id="password"
                placeholder="Введите пароль"
                className={classes.auth_input}
                type="password"
                onFocus={(e: FormEvent<HTMLInputElement>) => {
                  const target = e.target as HTMLInputElement;
                  target.style.border = '1px solid #009CB4';
                }}
                onChange={(e: FormEvent<HTMLInputElement>) => {
                  setInputPassword((e.target as HTMLInputElement).value);
                }}
                onBlur={(e: FormEvent<HTMLInputElement>) => {
                  validateValue(e, password);
                }}
              />
            </div>
            <div className={classes.checkbox}>
              <label htmlFor="remember" className={classes.check_label}>
                <input
                  tabIndex={3}
                  id="remember"
                  placeholder="Введите пароль"
                  className={classes.custom_checkbox}
                  type="checkbox"
                />
                <span>Запомнить меня на этом компьютере</span>
              </label>
            </div>
            <button
              tabIndex={4}
              className={classes.submit_btn}
              onClick={() => {
                handleClick();
              }}
            >
              Вход
            </button>
            <p className={classes.remember_link}>Забыли свой пароль?</p>
          </div>
          <div className={classes.help_links}>
            <nav className={classes.help_nav}>
              <ul className={classes.links_list}>
                <li className={classes.link}>Авторизация с использованием ЕС ИФЮЛ</li>
                <li className={classes.link}>Авторизация с использованием МСИ</li>
              </ul>
            </nav>
          </div>
          <div className={classes.register}>
            <p className={classes.text}>У вас нет аккаунта?</p>
            <p className={`${classes.text} ${classes.register_link}`}>
              Нажмите сюда, чтобы создать
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
