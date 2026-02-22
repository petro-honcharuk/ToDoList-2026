import React, { useState } from 'react';

import { StyleSheet, TextInput } from 'react-native';

import { BaseModal } from './BaseModa';

type Props = {
  visible: boolean;
  onClose: () => void;
  onAdd: (text: string) => void;
};

export const AddModal = ({ visible, onClose, onAdd }: Props) => {
  const [text, setText] = useState('');

  const handleSuccess = () => {
    onAdd(text);
    setText('');
    onClose();
  };

  const handleCancel = () => {
    onClose();
  };

  return (
    <BaseModal
      visible={visible}
      title="Add item"
      successButtonTitle="Add"
      cancelButtonTitle="Close"
      onSuccess={handleSuccess}
      onCancel={handleCancel}
    >
      <TextInput
        style={stylesAdd.input}
        placeholder="Add your item"
        value={text}
        onChangeText={setText}
      />
    </BaseModal>
  );
};

const stylesAdd = StyleSheet.create({
  input: {
    height: 45,
    width: '95%',
    borderWidth: 2,
    borderRadius: 8,
    margin: 20,
  },
  buttonCloseContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
