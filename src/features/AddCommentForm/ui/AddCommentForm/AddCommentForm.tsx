import { cx } from 'classix';
import { SyntheticEvent, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';

import { DynamicModuleLoader } from 'shared/lib/components/DynamicModuleLoader';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import { ReducersList } from 'shared/lib/types/reducersList';
import { Button, ButtonVariant } from 'shared/ui/Button/Button';
import { Input } from 'shared/ui/Input/Input';

import { getCommentFormText } from '../../model/selectors/getCommentFormText/getCommentFormText';
import { addCommentFormActions, addCommentFormReducer } from '../../model/slice/addCommentFormSlice';

import styles from './AddCommentForm.module.scss';

interface ICommentFormProps {
  className?: string;
  onSubmitCommentForm: (text: string) => void;
}

const initialReducers: ReducersList = {
  addCommentForm: addCommentFormReducer,
};

const AddCommentForm = (props: ICommentFormProps) => {
  const { className, onSubmitCommentForm } = props;
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const commentText = useSelector(getCommentFormText);

  const onCommentTextChange = useCallback(
    (value: string) => {
      dispatch(addCommentFormActions.setText(value));
    },
    [dispatch],
  );

  const handleCommentFormSubmit = (event: SyntheticEvent) => {
    event.preventDefault();
    onSubmitCommentForm(commentText);
    onCommentTextChange('');
  };

  return (
    <DynamicModuleLoader reducers={initialReducers} removeAfterUnmount>
      <h2>{t('Оставить комментарий')}</h2>
      <form className={cx(styles.addCommentForm, className)} onSubmit={handleCommentFormSubmit}>
        <Input
          className={styles.inputText}
          placeholder="Введите текст комментария"
          onChange={onCommentTextChange}
          value={commentText}
        />
        <Button className={styles.submitButton} variant={ButtonVariant.OUTLINED}>
          {t('Отправить')}
        </Button>
      </form>
    </DynamicModuleLoader>
  );
};

export default AddCommentForm;
