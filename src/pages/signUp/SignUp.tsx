import { LogoButton } from '~/features/navbar/logoBtn/LogoButton';
import { Input } from '~/shared/input/Input';
import { Submit } from '~/shared/submit/Submit';

import styles from './Style.module.scss';

// const signUpValidationSchema = {
//   name: {
//     type: 'string',
//     min: 3,
//     max: 48,
//     optional: true
//   },
//   email: {
//     type: 'email',
//     optional: true
//   },
//   password: {
//     type: 'string',
//     min: 8,
//     max: 16,
//     optional: true,
//     nullable: true
//   },
//   confirmpassword: {
//     type: 'equal',
//     field: 'password',
//     optional: true,
//     nullable: true
//   }
// };

// interface FormData {
//   email: {
//     value: string;
//   };
//   password: {
//     value: string;
//   };
//   username: {
//     value: string;
//   };
//   confirm_password: {
//     value: string;
//   };
// }

export const SignUp = () => {
  return (
    <div className={styles.container}>
      <LogoButton />
      <form className={styles.container_form}>
        <h2>Регистрация</h2>
        <Input
          label={'Имя'}
          placeholder={'Введите ваше имя'}
          type={'text'}
          name={'username'}
        />
        <Input
          label={'Email'}
          placeholder={'Введите ваш email'}
          type={'email'}
          name={'email'}
        />
        <Input
          label={'Пароль'}
          placeholder={'Введите ваш пароль'}
          type={'password'}
          name={'password'}
        />
        <Input
          label={'Пароль'}
          placeholder={'Подтвердите ваш пароль'}
          type={'password'}
          name={'confirm_password'}
        />
        <Submit value={'Зарегестрироваться'} />
        <p>Есть аккаунт? Авторизоваться</p>
      </form>
    </div>
  );
};
