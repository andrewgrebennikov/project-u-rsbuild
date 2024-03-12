import { cx } from 'classix';

import { ArticleImageBlock } from '../../model/types/article';

import styles from './ArticleImageBlockComponent.module.scss';

interface IArticleImageBlockProps {
  className?: string;
  block: ArticleImageBlock;
}

export const ArticleImageBlockComponent = (props: IArticleImageBlockProps) => {
  const { block, className } = props;
  const { src, title } = block;

  return (
    <div className={cx(className, styles.block)}>
      <figure>
        <img src={src} alt={title} />
        {title && <figcaption>{title}</figcaption>}
      </figure>
    </div>
  );
};
