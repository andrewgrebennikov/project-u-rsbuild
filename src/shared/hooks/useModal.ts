import { useCallback, useState } from 'react';

export const useModal = () => {
  const [isOpenModal, setIsOpenModal] = useState(false);

  const handleModalClose = useCallback(() => {
    setIsOpenModal(false);
  }, []);

  const handleModalOpen = useCallback(() => {
    setIsOpenModal(true);
  }, []);

  const handleModalToggle = useCallback(() => {
    setIsOpenModal(!isOpenModal);
  }, [isOpenModal]);

  return {
    isOpenModal,
    handleModalClose,
    handleModalOpen,
    handleModalToggle,
  };
};
