import { cx } from 'classix';
import { useCallback } from 'react';

import IconCopy from 'shared/assets/icons/icon-copy.svg';
import { IconButton } from 'shared/ui/IconBtn/IconButton';

import { ArticleCodeBlock } from '../../model/types/article';

import styles from './ArticleCodeBlockComponent.module.scss';

interface IArticleCodeBlockProps {
  className?: string;
  block: ArticleCodeBlock;
}

export const ArticleCodeBlockComponent = (props: IArticleCodeBlockProps) => {
  const { block, className } = props;
  const { code } = block;

  const handleCodeCopy = useCallback(() => {
    navigator.clipboard.writeText(code);
  }, [code]);

  return (
    <div className={cx(className, styles.block)}>
      <IconButton className={styles.btnCopy} onClick={handleCodeCopy}>
        <IconCopy width="24" height="24" className="icon" />
      </IconButton>
      <pre>
        <code>{code}</code>
      </pre>
    </div>
  );
};
