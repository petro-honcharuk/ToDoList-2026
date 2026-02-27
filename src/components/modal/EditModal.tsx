import React, { useState, useEffect } from 'react';

import { View, TextInput } from 'react-native';

import { ButtonComponent } from '../ButtonComponent';

import { addModalStyle } from './modal.Style';
import { ModalComponent } from './ModalComponent';

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
    <ModalComponent visible={visible} title="EDIT NOTE">
      <TextInput
        style={addModalStyle.input}
        value={text}
        onChangeText={setText}
      />
      <View style={addModalStyle.buttonContainerModal}>
        <ButtonComponent
          title="Close"
          onPress={onClose}
          styleButton={addModalStyle.buttonCancelContent}
          styleTitle={addModalStyle.buttonCancelTitle}
        />

        <ButtonComponent
          title="Edit"
          styleButton={addModalStyle.buttonApllyContent}
          styleTitle={addModalStyle.buttonApllyTitle}
          onPress={() => {
            onEdit(idItem, text);
            onClose();
          }}
        />
      </View>
    </ModalComponent>
  );
};
