import { cx } from 'classix';

import { ArticleTextBlock } from '../../model/types/article';

import styles from './ArticleTextBlockComponent.module.scss';

interface IArticleTextBlockProps {
  className?: string;
  block: ArticleTextBlock;
}

export const ArticleTextBlockComponent = (props: IArticleTextBlockProps) => {
  const { block, className } = props;
  const { title, paragraphs } = block;

  return (
    <div className={cx(className, styles.block)}>
      {title && <h2 className={styles.title}>{title}</h2>}
      {paragraphs?.map((paragraph, index) => {
        return (
          <p key={index} className={styles.text}>
            {paragraph}
          </p>
        );
      })}
    </div>
  );
};
