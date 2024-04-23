import { cx } from 'classix';
import { SyntheticEvent, useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';

import { useModal } from '@/shared/hooks/useModal';
import { Button, ButtonVariant } from '@/shared/ui/Button/Button';
import { Modal } from '@/shared/ui/Modal/Modal';
import { Rating } from '@/shared/ui/Rating/Rating';
import { TextField } from '@/shared/ui/TextField/TextField';

import styles from './RatingBlock.module.scss';

interface IRatingBlockProps {
  className?: string;
  title?: string;
  feedbackTitle?: string;
  hasFeedback?: boolean;
  onCancel?: (value: number) => void;
  onAccept?: (value: number, text?: string) => void;
  rating?: number;
}

export const RatingBlock = (props: IRatingBlockProps) => {
  const { className, title, feedbackTitle, hasFeedback = true, onAccept, onCancel, rating = 0 } = props;
  const { isOpenModal, handleModalClose, handleModalOpen } = useModal();
  const { t } = useTranslation('translation');
  const [ratingValue, setRatingValue] = useState(rating);
  const [feedback, setFeedback] = useState('');

  const handleRatingChange = useCallback(
    (rating: number) => {
      setRatingValue(rating);

      if (hasFeedback) {
        handleModalOpen();
      } else {
        onAccept?.(rating);
      }
    },
    [handleModalOpen, hasFeedback, onAccept],
  );

  const handleSubmit = useCallback(
    (event: SyntheticEvent) => {
      event.preventDefault();
      onAccept?.(ratingValue, feedback);
      handleModalClose();
      setFeedback('');
    },
    [feedback, handleModalClose, onAccept, ratingValue],
  );

  const handleCancel = useCallback(() => {
    onCancel?.(ratingValue);
    handleModalClose();
    setFeedback('');
  }, [handleModalClose, onCancel, ratingValue]);

  return (
    <div className={cx(styles.ratingBlock, className)}>
      {title && <h2 className={styles.title}>{rating ? t('Спасибо за отзыв') : title}</h2>}
      <Rating className={styles.rating} onChange={handleRatingChange} rating={ratingValue} disabled={Boolean(rating)} />
      <Modal isOpen={isOpenModal} onClose={handleModalClose} className={styles.modal}>
        <form onSubmit={handleSubmit}>
          {feedbackTitle && <h2 className={styles.feedbackTitle}>{feedbackTitle}</h2>}
          <TextField
            minLength={10}
            className={styles.input}
            label={t('Ваш отзыв')}
            value={feedback}
            onChange={setFeedback}
            required
          />
          <div className={styles.actions}>
            <Button type="submit" variant={ButtonVariant.OUTLINED}>
              {t('Отправить')}
            </Button>
            <Button type="button" variant={ButtonVariant.OUTLINED} onClick={handleCancel}>
              {t('Закрыть')}
            </Button>
          </div>
        </form>
      </Modal>
    </div>
  );
};
