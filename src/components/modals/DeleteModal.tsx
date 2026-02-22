import React from 'react';

import { BaseModal } from './BaseModa';

type Props = {
  visible: boolean;
  onDelete: (id: number) => void;
  closeModalDelete: () => void;
  idItem: number | undefined;
};

export const DeleteModal = ({
  visible,
  onDelete,
  closeModalDelete,
  idItem,
}: Props) => {
  const handleClickDelete = () => {
    if (idItem) {
      onDelete(idItem);
    }
    closeModalDelete();
  };

  const handleClickClose = () => {
    closeModalDelete();
  };

  return (
    <BaseModal
      visible={visible}
      title="Delete item"
      successButtonTitle="Delete"
      cancelButtonTitle="Close"
      onSuccess={handleClickDelete}
      onCancel={handleClickClose}
    />
  );
};
