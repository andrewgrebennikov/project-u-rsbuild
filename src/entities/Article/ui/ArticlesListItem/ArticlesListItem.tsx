import { cx } from 'classix';
import { HTMLAttributeAnchorTarget } from 'react';
import { Link } from 'react-router-dom';

import { ArticlesView } from '@/features/ArticlesViewSelector';

import IconEye from '@/shared/assets/icons/icon-eye.svg';
import { RoutePath } from '@/shared/config/routeConfig/routeConfig';
import { Avatar } from '@/shared/ui/Avatar/Avatar';
import { Button, ButtonVariant } from '@/shared/ui/Button/Button';

import { Article, ArticleBlockType, ArticleTextBlock } from '../../model/types/article';
import { ArticleTextBlockComponent } from '../ArticleTextBlockComponent/ArticleTextBlockComponent';

import styles from './ArticlesListItem.module.scss';

interface IArticlesListItemProps {
  className?: string;
  view?: ArticlesView;
  article: Article;
  target?: HTMLAttributeAnchorTarget;
}

export const ArticlesListItem = (props: IArticlesListItemProps) => {
  const { className, article, view, target } = props;
  const textBlock = article.blocks.find((block) => block.type === ArticleBlockType.TEXT) as ArticleTextBlock;

  const articleImage = (
    <Link to={RoutePath.article_details(article.id)} className={styles.link} target={target}>
      <picture className={styles.picture}>
        <img height="200" width="200" className={styles.image} src={article.img} alt={article.title} />
      </picture>
    </Link>
  );

  const views = (
    <div className={styles.views}>
      {article.views} <IconEye width="16" height="16" className="icon" />
    </div>
  );

  if (view === ArticlesView.GRID) {
    return (
      <article className={cx(styles.articleCard, className, view === ArticlesView.GRID && styles.articleCardGrid)}>
        {articleImage}
        <div className={styles.info}>
          <ul className={styles.types}>
            {article.type.map((type, index) => {
              return (
                <li key={index} className={styles.typesItem}>
                  {type}
                </li>
              );
            })}
          </ul>
          {views}
        </div>
        <h1 className={styles.title}>{article.title}</h1>
      </article>
    );
  }

  return (
    <article className={cx(styles.articleCard, className)}>
      <div className={styles.header}>
        <div className={styles.user}>
          <Avatar
            className={styles.avatar}
            src={article.user.avatar}
            alt={article.user.username}
            width={32}
            height={32}
          />
          <span className={styles.username}>{article.user.username}</span>
        </div>
        <time dateTime={article.createdAt} className={styles.time}>
          {article.createdAt}
        </time>
      </div>
      <h1 className={styles.title}>{article.title}</h1>
      <ul className={styles.types}>
        {article.type.map((type, index) => {
          return (
            <li key={index} className={styles.typesItem}>
              {type}
            </li>
          );
        })}
      </ul>
      {articleImage}
      {textBlock && (
        <div className={styles.desc}>
          <ArticleTextBlockComponent key={textBlock.id} block={textBlock} />
        </div>
      )}
      <div className={styles.footer}>
        <Button variant={ButtonVariant.OUTLINED}>Читать далее...</Button>
        {views}
      </div>
    </article>
  );
};
