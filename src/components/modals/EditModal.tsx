import React, { useState, useEffect } from 'react';

import { TextInput, StyleSheet } from 'react-native';

import { BaseModal } from './BaseModa';

type Props = {
  visible: boolean;
  onEdit: (id: number, title: string) => void;
  onClose: () => void;
  idItem: number | undefined;
  titleItem: string | undefined;
};

export const EditModal = ({
  visible,
  onEdit,
  onClose,
  idItem,
  titleItem,
}: Props) => {
  const [text, setText] = useState('');

  useEffect(() => {
    if (titleItem) {
      setText(titleItem);
    }
  }, [titleItem]);

  const handleClickEdit = () => {
    if (idItem) {
      onEdit(idItem, text);
      onClose();
    }
  };

  const handleClickClose = () => {
    onClose();
  };

  return (
    <BaseModal
      visible={visible}
      title="Edit item"
      successButtonTitle="Edit"
      cancelButtonTitle="Close"
      onSuccess={handleClickEdit}
      onCancel={handleClickClose}
    >
      <TextInput style={styles.input} value={text} onChangeText={setText} />
    </BaseModal>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 45,
    width: '95%',
    borderWidth: 2,
    borderRadius: 8,
    margin: 20,
  },
});
