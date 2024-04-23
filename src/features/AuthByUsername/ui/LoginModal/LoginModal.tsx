import { Suspense } from 'react';

import { Modal } from '@/shared/ui/Modal/Modal';

import { LoginFormLazy } from '../LoginForm/LoginFormLazy';

interface ILoginModalProps {
  className?: string;
  isOpen: boolean;
  onClose: () => void;
}

export const LoginModal = (props: ILoginModalProps) => {
  const { className, isOpen, onClose } = props;

  return (
    <Modal isOpen={isOpen} onClose={onClose} className={className}>
      <Suspense fallback={'Загрузка...'}>
        <LoginFormLazy onClose={onClose} />
      </Suspense>
    </Modal>
  );
};
