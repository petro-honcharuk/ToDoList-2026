import React from 'react';

import { View } from 'react-native';

import { useTheme } from '@/src/theme/ThemeContext';

import { ButtonComponent } from '../ButtonComponent';
import { ModalComponent } from '../modal/ModalComponent';

import { createStyles } from './modal.Style';

type Props = {
  visible: boolean;
  onDelete: (id: number) => void;
  closeModalDelete: () => void;
  idItem: number;
};

export const DeleteModal = ({
  visible,
  onDelete,
  closeModalDelete,
  idItem,
}: Props) => {
  const { colors } = useTheme();
  const modalStyle = createStyles(colors);
  return (
    <ModalComponent visible={visible} title="DELETE NOTE">
      <View style={modalStyle.buttonContainerModal}>
        <ButtonComponent
          title="Close"
          onPress={closeModalDelete}
          styleButton={modalStyle.buttonCancelContent}
          styleTitle={modalStyle.buttonCancelTitle}
        />
        <ButtonComponent
          title="Delete"
          styleButton={modalStyle.buttonApllyContent}
          styleTitle={modalStyle.buttonApllyTitle}
          onPress={() => {
            onDelete(idItem);
            closeModalDelete();
          }}
        />
      </View>
    </ModalComponent>
  );
};
