import { cx } from 'classix';
import { SyntheticEvent, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';

import { DynamicModuleLoader } from 'shared/lib/components/DynamicModuleLoader';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import { ReducersList } from 'shared/lib/types/reducersList';
import { Button, ButtonVariant } from 'shared/ui/Button/Button';
import { TextField } from 'shared/ui/TextField/TextField';

import { getCommentFormIsLoading } from '../../model/selectors/getCommentFormIsLoading/getCommentFormIsLoading';
import { getCommentFormText } from '../../model/selectors/getCommentFormText/getCommentFormText';
import { addCommentForArticle } from '../../model/services/addCommentForArticle/addCommentForArticle';
import { addCommentFormActions, addCommentFormReducer } from '../../model/slice/addCommentFormSlice';

import styles from './AddCommentForm.module.scss';

interface ICommentFormProps {
  className?: string;
}

const initialReducers: ReducersList = {
  addCommentForm: addCommentFormReducer,
};

const AddCommentForm = (props: ICommentFormProps) => {
  const { className } = props;
  const { t } = useTranslation('translation');
  const dispatch = useAppDispatch();
  const commentText = useSelector(getCommentFormText);
  const isLoading = useSelector(getCommentFormIsLoading);

  const onCommentTextChange = useCallback(
    (value: string) => {
      dispatch(addCommentFormActions.setText(value));
    },
    [dispatch],
  );

  const handleCommentFormSubmit = (event: SyntheticEvent) => {
    event.preventDefault();
    addCommentForArticle(commentText);
    onCommentTextChange('');
  };

  return (
    <DynamicModuleLoader reducers={initialReducers} removeAfterUnmount>
      <h2>{t('Оставить комментарий')}</h2>
      <form className={cx(styles.addCommentForm, className)} onSubmit={handleCommentFormSubmit}>
        <TextField
          className={styles.inputText}
          placeholder={t('Введите текст комментария')}
          onChange={onCommentTextChange}
          value={commentText}
          required
        />
        <Button className={styles.submitButton} variant={ButtonVariant.OUTLINED} disabled={isLoading}>
          {t('Отправить')}
        </Button>
      </form>
    </DynamicModuleLoader>
  );
};

export default AddCommentForm;
