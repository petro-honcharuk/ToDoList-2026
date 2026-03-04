import React, { useState } from 'react';

import { View } from 'react-native';

import { useStyles } from '@/src/theme/hooks/useStyles.hook';

import { ButtonComponent } from '../ButtonComponent';
import { InputComponent } from '../InputComponent';
import { ModalComponent } from '../modal/ModalComponent';

import { stylesheet } from './modal.style';

type Props = {
  visible: boolean;
  onClose: () => void;
  onAdd: (text: string) => void;
};

export const AddModal = ({ visible, onClose, onAdd }: Props) => {
  const [text, setText] = useState('');
  const styles = useStyles(stylesheet);

  const handlePressApply = () => {
    if (!text) return;
    onAdd(text);
    setText('');
  };

  return (
    <ModalComponent visible={visible} title="NEW NOTE">
      <View style={styles.inputContainer}>
        <InputComponent
          placeholder={'Add new note...'}
          value={text}
          onChangeText={setText}
        />
      </View>
      <View style={styles.buttonContainerModal}>
        <ButtonComponent
          title="CANCEL"
          onPress={onClose}
          styleButton={styles.buttonCancelContent}
          styleTitle={styles.buttonCancelTitle}
        />
        <ButtonComponent
          title="APPLY"
          styleButton={styles.buttonApllyContent}
          styleTitle={styles.buttonApllyTitle}
          onPress={handlePressApply}
        />
      </View>
    </ModalComponent>
  );
};
