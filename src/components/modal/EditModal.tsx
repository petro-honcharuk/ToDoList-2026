import React, { useState, useEffect } from 'react';

import { View } from 'react-native';

import { useStyles } from '@/src/theme/hooks/useStyles.hook';

import { ButtonComponent } from '../ButtonComponent';
import { InputComponent } from '../InputComponent';

import { stylesheet } from './modal.style';
import { ModalComponent } from './ModalComponent';

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
  const [text, setText] = useState(titleItem);
  const styles = useStyles(stylesheet);

  useEffect(() => {
    if (visible) {
      setText(titleItem);
    }
  }, [visible, titleItem]);
  const handlerPressEdit = () => {
    if (!idItem || !text) return;
    onEdit(idItem, text);
    onClose();
  };

  return (
    <ModalComponent visible={visible} title="EDIT NOTE">
      <View style={styles.inputContainer}>
        <InputComponent value={text} onChangeText={setText} />
      </View>
      <View style={styles.buttonContainerModal}>
        <ButtonComponent
          title="Close"
          onPress={onClose}
          styleButton={styles.buttonCancelContent}
          styleTitle={styles.buttonCancelTitle}
        />

        <ButtonComponent
          title="Edit"
          styleButton={styles.buttonApllyContent}
          styleTitle={styles.buttonApllyTitle}
          onPress={handlerPressEdit}
        />
      </View>
    </ModalComponent>
  );
};
