import React, { useState, useEffect } from 'react';

import { View, TextInput } from 'react-native';

import { useTheme } from '@/src/theme/ThemeContext';

import { ButtonComponent } from '../ButtonComponent';

import { createStyles } from './modal.Style';
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
  const { colors } = useTheme();
  const modalStyle = createStyles(colors);

  useEffect(() => {
    if (titleItem) {
      setText(titleItem);
    }
  }, [titleItem]);

  return (
    <ModalComponent visible={visible} title="EDIT NOTE">
      <TextInput style={modalStyle.input} value={text} onChangeText={setText} />
      <View style={modalStyle.buttonContainerModal}>
        <ButtonComponent
          title="Close"
          onPress={onClose}
          styleButton={modalStyle.buttonCancelContent}
          styleTitle={modalStyle.buttonCancelTitle}
        />

        <ButtonComponent
          title="Edit"
          styleButton={modalStyle.buttonApllyContent}
          styleTitle={modalStyle.buttonApllyTitle}
          onPress={() => {
            onEdit(idItem, text);
            onClose();
          }}
        />
      </View>
    </ModalComponent>
  );
};
