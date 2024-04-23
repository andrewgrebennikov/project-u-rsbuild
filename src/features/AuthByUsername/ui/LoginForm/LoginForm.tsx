import { cx } from 'classix';
import { memo, SyntheticEvent, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';

import { DynamicModuleLoader } from '@/shared/lib/components/DynamicModuleLoader';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch';
import { ReducersList } from '@/shared/lib/types/reducersList';
import { Button } from '@/shared/ui/Button/Button';
import { TextField } from '@/shared/ui/TextField/TextField';

import { getLoginError } from '../../model/selectors/getLoginError/getLoginError';
import { getLoginIsLoading } from '../../model/selectors/getLoginIsLoading/getLoginIsLoading';
import { getLoginPassword } from '../../model/selectors/getLoginPassword/getLoginPassword';
import { getLoginUsername } from '../../model/selectors/getLoginUsername/getLoginUsername';
import { loginByUsername } from '../../model/services/loginByUsername/loginByUsername';
import { loginActions, loginReducer } from '../../model/slice/loginSlice';

import styles from './LoginForm.module.scss';

const initialReducers: ReducersList = { login: loginReducer };

interface ILoginFormProps {
  onClose: () => void;
  className?: string;
}

const LoginForm = memo((props: ILoginFormProps) => {
  const { className, onClose } = props;
  const { t } = useTranslation('translation');
  const dispatch = useAppDispatch();
  const username = useSelector(getLoginUsername);
  const password = useSelector(getLoginPassword);
  const isLoading = useSelector(getLoginIsLoading);
  const error = useSelector(getLoginError);

  const handleUsernameChange = useCallback(
    (value: string) => {
      dispatch(loginActions.setUsername(value));
    },
    [dispatch],
  );

  const handlePasswordChange = useCallback(
    (value: string) => {
      dispatch(loginActions.setPassword(value));
    },
    [dispatch],
  );

  const handleLoginFormSubmit = useCallback(
    async (event: SyntheticEvent) => {
      event.preventDefault();
      const result = await dispatch(loginByUsername({ username, password }));

      if (result.meta.requestStatus === 'fulfilled') {
        onClose();
      }
    },
    [dispatch, password, username, onClose],
  );

  return (
    <DynamicModuleLoader reducers={initialReducers} removeAfterUnmount>
      <form className={cx(styles.form, className)} onSubmit={handleLoginFormSubmit}>
        <fieldset className={styles.fieldset}>
          <legend className={styles.legend}>{t('Войти')}</legend>
          {error && <p className={styles.error}>{t('Вы ввели неверный логин или пароль')}</p>}
          <TextField
            className={styles.input}
            type="text"
            label={t('Имя')}
            placeholder={t('Имя')}
            value={username}
            onChange={handleUsernameChange}
            minLength={2}
            autoFocus
            required
          />
          <TextField
            className={styles.input}
            type="text"
            label={t('Пароль')}
            placeholder={t('Пароль')}
            value={password}
            onChange={handlePasswordChange}
            required
          />
        </fieldset>
        <div className={styles.actions}>
          <Button variant="outlined" disabled={isLoading}>
            {t('Отправить')}
          </Button>
        </div>
      </form>
    </DynamicModuleLoader>
  );
});

export default LoginForm;
