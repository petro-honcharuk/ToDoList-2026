import React from 'react';

import { View } from 'react-native';

import { ButtonComponent } from '../ButtonComponent';
import { ModalComponent } from '../modal/ModalComponent';

import { addModalStyle } from './modal.Style';

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
  return (
    <ModalComponent visible={visible} title="DELETE NOTE">
      <View style={addModalStyle.buttonContainerModal}>
        <ButtonComponent
          title="Close"
          onPress={closeModalDelete}
          styleButton={addModalStyle.buttonCancelContent}
          styleTitle={addModalStyle.buttonCancelTitle}
        />
        <ButtonComponent
          title="Delete"
          styleButton={addModalStyle.buttonApllyContent}
          styleTitle={addModalStyle.buttonApllyTitle}
          onPress={() => {
            onDelete(idItem);
            closeModalDelete();
          }}
        />
      </View>
    </ModalComponent>
  );
};
