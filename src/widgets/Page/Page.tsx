import { cx } from 'classix';
import { memo, MutableRefObject, ReactNode, UIEvent, useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';

import { StoreSchema } from '@/app/providers/StoreProvider/types/storeSchema';

import { scrollActions, getScrollPositionByPathname } from '@/features/SavePositionScroll';

import { useInfinityScroll } from '@/shared/hooks/useInfinityScroll';
import { useThrottle } from '@/shared/hooks/useThrottle';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch';

import styles from './Page.module.scss';

interface IPageProps {
  className?: string;
  children: ReactNode;
  onScrollEnd?: () => void;
}

export const Page = memo((props: IPageProps) => {
  const { className, children, onScrollEnd } = props;
  const dispatch = useAppDispatch();
  const { pathname } = useLocation();
  const wrapperRef = useRef() as MutableRefObject<HTMLDivElement>;
  const triggerRef = useRef() as MutableRefObject<HTMLDivElement>;
  const scrollPosition = useSelector((state: StoreSchema) => getScrollPositionByPathname(state, pathname));

  const handlePageScroll = useThrottle((event: UIEvent<HTMLDivElement>) => {
    dispatch(scrollActions.setScrollPosition({ pathname, position: event.currentTarget.scrollTop }));
  }, 500);

  useInfinityScroll({
    wrapperRef,
    triggerRef,
    callback: onScrollEnd,
  });

  useEffect(() => {
    wrapperRef.current.scrollTop = scrollPosition;
  }, [scrollPosition]);

  return (
    <div ref={wrapperRef} className={cx(styles.page, className)} onScroll={handlePageScroll}>
      {children}
      {onScrollEnd && <div ref={triggerRef} className={styles.trigger} />}
    </div>
  );
});
