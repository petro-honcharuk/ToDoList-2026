import React from 'react';

import { View, Modal } from 'react-native';

import { styles } from '../style/style';

import { ButtonComponent } from './ButtonComponent';
import { TitleComponent } from './TitleComponent';

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
    <Modal visible={visible} animationType="slide" transparent={true}>
      <View style={styles.modal}>
        <View style={styles.modalView}>
          <TitleComponent title="Confirm delete" />
          <View style={styles.buttonContainerModal}>
            <ButtonComponent
              title="Delete"
              onPress={() => {
                onDelete(idItem);
                closeModalDelete();
              }}
            />
            <ButtonComponent title="Close" onPress={closeModalDelete} />
          </View>
        </View>
      </View>
    </Modal>
  );
};
