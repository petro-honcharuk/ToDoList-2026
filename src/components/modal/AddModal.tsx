import React, { useState } from 'react';

import { TextInput, View } from 'react-native';

import { useTheme } from '@/src/theme/ThemeContext';

import { ButtonComponent } from '../ButtonComponent';
import { ModalComponent } from '../modal/ModalComponent';

import { createStyles } from './modal.Style';

type Props = {
  visible: boolean;
  onClose: () => void;
  onAdd: (text: string) => void;
};

export const AddModal = ({ visible, onClose, onAdd }: Props) => {
  const [text, setText] = useState('');
  const { colors } = useTheme();
  const modalStyle = createStyles(colors);
  return (
    <ModalComponent visible={visible} title="NEW NOTE">
      <TextInput
        style={modalStyle.input}
        placeholder="Add new note..."
        value={text}
        onChangeText={setText}
      />

      <View style={modalStyle.buttonContainerModal}>
        <ButtonComponent
          title="CANCEL"
          onPress={onClose}
          styleButton={modalStyle.buttonCancelContent}
          styleTitle={modalStyle.buttonCancelTitle}
        />
        <ButtonComponent
          title="APLLY"
          styleButton={modalStyle.buttonApllyContent}
          styleTitle={modalStyle.buttonApllyTitle}
          onPress={() => {
            onAdd(text);
            setText('');
          }}
        />
      </View>
    </ModalComponent>
  );
};
