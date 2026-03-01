import React from 'react';

import { View } from 'react-native';

import { useStyles } from '@/src/theme/hooks/useStyles.hook';

import { ButtonComponent } from '../ButtonComponent';
import { ModalComponent } from '../modal/ModalComponent';

import { stylesheet } from './modal.style';

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
  const styles = useStyles(stylesheet);
  return (
    <ModalComponent visible={visible} title="DELETE NOTE">
      <View style={styles.buttonContainerModal}>
        <ButtonComponent
          title="Close"
          onPress={closeModalDelete}
          styleButton={styles.buttonCancelContent}
          styleTitle={styles.buttonCancelTitle}
        />
        <ButtonComponent
          title="Delete"
          styleButton={styles.buttonApllyContent}
          styleTitle={styles.buttonApllyTitle}
          onPress={() => {
            onDelete(idItem);
            closeModalDelete();
          }}
        />
      </View>
    </ModalComponent>
  );
};
