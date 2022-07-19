import React, { FormEvent, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { COUNTRIES, BEL_CITIES, RU_CITIES } from '../../constants';
import { StoreInterface } from '../../interfaces/store-interface';
import { UPDATE_USER } from '../../redux/reducers/auth/actions';
import Avatar from '../avatar/Avatar';
import PersonalNav from '../personal-nav/PersonalNav';
import classes from './personal.module.css';

export default function PersonalForm() {
  const { name, surname, patronymic, phone, password, country, city, isAuthorized } = useSelector(
    (state: StoreInterface) => {
      return state.auth;
    }
  );
  const dispatch = useDispatch();
  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    isAuthorized
      ? dispatch({
          type: UPDATE_USER,
          payload: {
            name: inputName,
            surname: inputSurname,
            patronymic: inputPatronymic,
            country: inputCountry,
            city: inputCity,
            phone: inputPhone,
            password: inputPassword,
            confirmedPassword: inputConfirmedPassword,
          },
        })
      : alert('Вы не авторизованы!');
  };
  const [inputName, setInputName] = useState(name);
  const [inputSurname, setInputSurname] = useState(surname);
  const [inputPatronymic, setInputPatronymic] = useState(patronymic);
  const [inputPhone, setInputPhone] = useState(phone);
  const [inputCountry, setInputCountry] = useState(country);
  const [inputCity, setInputCity] = useState(city);
  const [inputConfirmedPassword, setInputConfirmedPassword] = useState(password);
  const [inputPassword, setInputPassword] = useState(password);
  const [isLeftEyeActive, setIsLeftActive] = useState(false);
  const [isRightEyeActive, setIsRightActive] = useState(false);
  return (
    <div className={classes.personal_container}>
      <section className={classes.personal_content}>
        <h2 className={classes.personal_header}>Личный кабинет</h2>
        <div className={classes.personal_panel}>
          <PersonalNav></PersonalNav>
          <section className={classes.personal_info}>
            <div className={classes.user_greeting}>
              <Avatar></Avatar>
              <h4 className={classes.greeting_header}>Здравствуй, {name}!</h4>
            </div>
            <div className={classes.user_settings}>
              <h6 className={classes.settings_header}>Основные данные</h6>
              <section className={classes.form_container}>
                <div>
                  <label htmlFor="name" className={classes.input_text_label}>
                    Имя
                  </label>
                  <input
                    className={classes.text_input}
                    type="text"
                    maxLength={30}
                    id="name"
                    value={inputName}
                    onChange={(e: FormEvent<HTMLInputElement>) => {
                      setInputName((e.target as HTMLInputElement).value);
                      (e.target as HTMLInputElement).style.border =
                        (e.target as HTMLInputElement).value !== '' ? 'none' : '1px solid #E0371F';
                    }}
                  ></input>
                </div>
                <div>
                  <label htmlFor="surname" className={classes.input_text_label}>
                    Фамилия
                  </label>
                  <input
                    className={classes.text_input}
                    type="text"
                    maxLength={30}
                    id="surname"
                    value={inputSurname}
                    onChange={(e: FormEvent<HTMLInputElement>) => {
                      setInputSurname((e.target as HTMLInputElement).value);
                      (e.target as HTMLInputElement).style.border =
                        (e.target as HTMLInputElement).value !== '' ? 'none' : '1px solid #E0371F';
                    }}
                  ></input>
                </div>
                <div>
                  <label htmlFor="patronymic" className={classes.input_text_label}>
                    Отчество
                  </label>
                  <input
                    className={classes.text_input}
                    type="text"
                    maxLength={30}
                    id="patronymic"
                    value={inputPatronymic}
                    onChange={(e: FormEvent<HTMLInputElement>) => {
                      setInputPatronymic((e.target as HTMLInputElement).value);
                      (e.target as HTMLInputElement).style.border =
                        (e.target as HTMLInputElement).value !== '' ? 'none' : '1px solid #E0371F';
                    }}
                  ></input>
                </div>
                <div>
                  <label htmlFor="country" className={classes.input_text_label}>
                    Страна
                  </label>
                  <select
                    className={classes.select}
                    value={inputCountry}
                    onChange={(e: FormEvent<HTMLSelectElement>) => {
                      const target = e.target as HTMLSelectElement;
                      const value = target.value;
                      setInputCountry(value);
                    }}
                  >
                    {COUNTRIES.map((item) => {
                      return (
                        <option value={item} key={item} className={classes.option}>
                          {item}
                        </option>
                      );
                    })}
                  </select>
                </div>
                <div>
                  <label htmlFor="city" className={classes.input_text_label}>
                    Город
                  </label>
                  <select
                    className={classes.select}
                    value={inputCity}
                    onChange={(e: FormEvent<HTMLSelectElement>) => {
                      const target = e.target as HTMLSelectElement;
                      const value = target.value;
                      setInputCity(value);
                    }}
                  >
                    {(inputCountry === 'Беларусь' ? BEL_CITIES : RU_CITIES).map((item) => {
                      return (
                        <option value={item} key={item} className={classes.option}>
                          {item}
                        </option>
                      );
                    })}
                  </select>
                </div>
                <div>
                  <label htmlFor="tel" className={classes.input_text_label}>
                    Телефон
                  </label>
                  <input
                    className={classes.text_input}
                    type="text"
                    maxLength={30}
                    id="tel"
                    value={inputPhone}
                    onChange={(e: FormEvent<HTMLInputElement>) => {
                      setInputPhone((e.target as HTMLInputElement).value);
                      (e.target as HTMLInputElement).style.border =
                        (e.target as HTMLInputElement).value !== '' ? 'none' : '1px solid #E0371F';
                    }}
                  ></input>
                </div>
              </section>
              <div style={{ marginTop: '72px' }}>
                <h6 className={classes.settings_header}>Пароль</h6>
                <section className={classes.form_container}>
                  <div>
                    <label htmlFor="password" className={classes.input_text_label}>
                      Новый пароль
                    </label>
                    <div className={classes.wrap}>
                      <input
                        className={classes.text_input}
                        type={isLeftEyeActive ? 'text' : 'password'}
                        maxLength={30}
                        id="password"
                        value={inputPassword}
                        onInput={(e: FormEvent<HTMLInputElement>) => {
                          setInputPassword((e.target as HTMLInputElement).value);
                          (e.target as HTMLInputElement).style.border =
                            inputConfirmedPassword === (e.target as HTMLInputElement).value
                              ? 'none'
                              : '1px solid #E0371F';
                        }}
                      ></input>
                      <svg
                        onClick={() => {
                          setIsLeftActive(!isLeftEyeActive);
                        }}
                        className={classes.eye_icon}
                        width="22"
                        height="17"
                        viewBox="0 0 22 17"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M20.0599 5.98C18.0899 3.62 14.9299 0.799995 11.0099 0.799995C10.2599 0.799995 9.48989 0.909995 8.72989 1.12C8.19989 1.27 7.88989 1.81999 8.03989 2.34999C8.18989 2.87999 8.7399 3.19 9.2699 3.04C9.8499 2.88 10.4399 2.79 11.0099 2.79C14.3099 2.79 17.1299 5.58 18.5199 7.25C19.1499 8.01 19.1599 9.07999 18.5499 9.83999C18.3099 10.14 18.0399 10.45 17.7399 10.77C17.3599 11.17 17.3799 11.81 17.7799 12.18C17.9699 12.36 18.2199 12.45 18.4699 12.45C18.7399 12.45 18.9999 12.34 19.1999 12.14C19.5399 11.78 19.8399 11.43 20.1099 11.1C21.3199 9.60999 21.2999 7.45 20.0699 5.97L20.0599 5.98Z"
                          fill="#A8AAAE"
                        />
                        <path
                          d="M7.04989 3.14C7.01989 3.06 6.99989 2.98 6.94989 2.9C6.81989 2.71 6.63989 2.6 6.44989 2.53L4.7099 0.789998C4.3199 0.399998 3.67989 0.399998 3.29989 0.789998C2.90989 1.18 2.90989 1.81 3.29989 2.2L4.51989 3.41999C3.63989 4.12999 2.7899 4.97 1.9599 5.95C0.709897 7.43 0.669891 9.52 1.85989 11.04C3.36989 12.96 6.55989 16.19 10.9699 16.19C12.6399 16.19 14.2799 15.71 15.8699 14.8L17.2699 16.21C17.4699 16.41 17.7199 16.5 17.9799 16.5C18.2399 16.5 18.4899 16.4 18.6899 16.21C19.0799 15.82 19.0799 15.19 18.6899 14.8L7.04989 3.14ZM9.0699 8L11.4999 10.43C11.3399 10.47 11.1699 10.5 10.9999 10.5C9.89989 10.5 8.99989 9.6 8.99989 8.5C8.99989 8.33 9.0299 8.16 9.0699 8ZM10.9599 14.2C7.3999 14.2 4.70989 11.45 3.41989 9.80999C2.81989 9.04999 2.83989 7.99 3.46989 7.25C4.25989 6.31 5.07989 5.51 5.91989 4.86L7.55989 6.5C7.19989 7.11 6.9899 7.79 6.9899 8.51C6.9899 10.72 8.7799 12.51 10.9899 12.51C11.6999 12.51 12.3899 12.3 12.9899 11.95L14.3799 13.35C13.2499 13.92 12.0999 14.21 10.9499 14.21L10.9599 14.2Z"
                          fill="#A8AAAE"
                        />
                      </svg>
                    </div>
                  </div>
                  <div>
                    <label htmlFor="confirm-password" className={classes.input_text_label}>
                      Подтверждение пароля
                    </label>
                    <div className={classes.wrap}>
                      <input
                        className={classes.text_input}
                        type={isRightEyeActive ? 'text' : 'password'}
                        maxLength={30}
                        id="confirm-password"
                        value={inputConfirmedPassword}
                        onInput={(e: FormEvent<HTMLInputElement>) => {
                          setInputConfirmedPassword((e.target as HTMLInputElement).value);
                          (e.target as HTMLInputElement).style.border =
                            (e.target as HTMLInputElement).value === inputPassword
                              ? 'none'
                              : '1px solid #E0371F';
                        }}
                      />
                      <svg
                        onClick={() => {
                          setIsRightActive(!isRightEyeActive);
                        }}
                        className={classes.eye_icon}
                        width="22"
                        height="17"
                        viewBox="0 0 22 17"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M20.0599 5.98C18.0899 3.62 14.9299 0.799995 11.0099 0.799995C10.2599 0.799995 9.48989 0.909995 8.72989 1.12C8.19989 1.27 7.88989 1.81999 8.03989 2.34999C8.18989 2.87999 8.7399 3.19 9.2699 3.04C9.8499 2.88 10.4399 2.79 11.0099 2.79C14.3099 2.79 17.1299 5.58 18.5199 7.25C19.1499 8.01 19.1599 9.07999 18.5499 9.83999C18.3099 10.14 18.0399 10.45 17.7399 10.77C17.3599 11.17 17.3799 11.81 17.7799 12.18C17.9699 12.36 18.2199 12.45 18.4699 12.45C18.7399 12.45 18.9999 12.34 19.1999 12.14C19.5399 11.78 19.8399 11.43 20.1099 11.1C21.3199 9.60999 21.2999 7.45 20.0699 5.97L20.0599 5.98Z"
                          fill="#A8AAAE"
                        />
                        <path
                          d="M7.04989 3.14C7.01989 3.06 6.99989 2.98 6.94989 2.9C6.81989 2.71 6.63989 2.6 6.44989 2.53L4.7099 0.789998C4.3199 0.399998 3.67989 0.399998 3.29989 0.789998C2.90989 1.18 2.90989 1.81 3.29989 2.2L4.51989 3.41999C3.63989 4.12999 2.7899 4.97 1.9599 5.95C0.709897 7.43 0.669891 9.52 1.85989 11.04C3.36989 12.96 6.55989 16.19 10.9699 16.19C12.6399 16.19 14.2799 15.71 15.8699 14.8L17.2699 16.21C17.4699 16.41 17.7199 16.5 17.9799 16.5C18.2399 16.5 18.4899 16.4 18.6899 16.21C19.0799 15.82 19.0799 15.19 18.6899 14.8L7.04989 3.14ZM9.0699 8L11.4999 10.43C11.3399 10.47 11.1699 10.5 10.9999 10.5C9.89989 10.5 8.99989 9.6 8.99989 8.5C8.99989 8.33 9.0299 8.16 9.0699 8ZM10.9599 14.2C7.3999 14.2 4.70989 11.45 3.41989 9.80999C2.81989 9.04999 2.83989 7.99 3.46989 7.25C4.25989 6.31 5.07989 5.51 5.91989 4.86L7.55989 6.5C7.19989 7.11 6.9899 7.79 6.9899 8.51C6.9899 10.72 8.7799 12.51 10.9899 12.51C11.6999 12.51 12.3899 12.3 12.9899 11.95L14.3799 13.35C13.2499 13.92 12.0999 14.21 10.9499 14.21L10.9599 14.2Z"
                          fill="#A8AAAE"
                        />
                      </svg>
                    </div>
                  </div>
                </section>
                <button
                  className={classes.submit_btn}
                  onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
                    handleSubmit(e);
                  }}
                >
                  Сохранить
                </button>
              </div>
            </div>
          </section>
        </div>
      </section>
    </div>
  );
}
