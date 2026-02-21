import React, { useState, useEffect } from 'react';

import { View, Modal, TextInput } from 'react-native';

import { styles } from '../style/style';

import { ButtonComponent } from './ButtonComponent';

type Props = {
  visible: boolean;
  onEdit: (id: number, title: string) => void;
  onClose: () => void;
  idItem: number;
  titleItem: string;
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

  return (
    <Modal visible={visible} animationType="slide" transparent={true}>
      <View style={styles.modal}>
        <View style={styles.modalView}>
          <TextInput style={styles.input} value={text} onChangeText={setText} />
          <ButtonComponent
            title="Edit"
            onPress={() => {
              onEdit(idItem, text);
              onClose();
            }}
          />
          <ButtonComponent title="Close" onPress={onClose} />
        </View>
      </View>
    </Modal>
  );
};
