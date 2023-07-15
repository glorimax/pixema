import { LogoButton } from '~/features/navbar/logoBtn/LogoButton';
import { Input } from '~/shared/input/Input';
import { Submit } from '~/shared/submit/Submit';

import styles from './Style.module.scss';

export const SignIn = () => {
  return (
    <div className={styles.container}>
      <LogoButton />
      <form className={styles.form_container}>
        <h2>Авторизация</h2>
        <Input
          type={'text'}
          placeholder={'Введите имя'}
          label={'Имя'}
          name={'username'}
        />
        <Input
          type={'password'}
          label={'Пароль'}
          placeholder={'Введите ваш пароль'}
          name={'password'}
        />
        <p className={styles.forgot_link}>Забыли пароль?</p>
        <Submit value={'Войти'} />
        <p>Нет аккаунта? Зарегестрироваться</p>
      </form>
    </div>
  );
};
