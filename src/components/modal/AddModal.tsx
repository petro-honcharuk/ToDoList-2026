import React, { useState } from 'react';

import { TextInput, View } from 'react-native';

import { ButtonComponent } from '../ButtonComponent';
import { ModalComponent } from '../modal/ModalComponent';

import { addModalStyle } from './modal.Style';

type Props = {
  visible: boolean;
  onClose: () => void;
  onAdd: (text: string) => void;
};

export const AddModal = ({ visible, onClose, onAdd }: Props) => {
  const [text, setText] = useState('');
  return (
    <ModalComponent visible={visible} title="NEW NOTE">
      <TextInput
        style={addModalStyle.input}
        placeholder="Add new note..."
        value={text}
        onChangeText={setText}
      />

      <View style={addModalStyle.buttonContainerModal}>
        <ButtonComponent
          title="CANCEL"
          onPress={onClose}
          styleButton={addModalStyle.buttonCancelContent}
          styleTitle={addModalStyle.buttonCancelTitle}
        />
        <ButtonComponent
          title="APLLY"
          styleButton={addModalStyle.buttonApllyContent}
          styleTitle={addModalStyle.buttonApllyTitle}
          onPress={() => {
            onAdd(text);
            setText('');
          }}
        />
      </View>
    </ModalComponent>
  );
};
