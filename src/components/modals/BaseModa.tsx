import { PropsWithChildren } from 'react';

import { Modal, View, StyleSheet } from 'react-native';

import { ButtonComponent } from '../ButtonComponent';
import { TitleComponent } from '../TitleComponent';

interface BaseModalProps extends PropsWithChildren {
  visible: boolean;
  title: string;
  successButtonTitle: string;
  cancelButtonTitle: string;
  onSuccess: () => void;
  onCancel: () => void;
}

export const BaseModal = ({
  visible,
  children,
  title,
  successButtonTitle,
  cancelButtonTitle,
  onSuccess,
  onCancel,
}: BaseModalProps) => {
  return (
    <Modal visible={visible} animationType="slide" transparent={true}>
      <View style={styles.modal}>
        <View style={styles.modalView}>
          <TitleComponent title={title} />
          {children}
          <View style={styles.buttonContainerModal}>
            <ButtonComponent title={successButtonTitle} onPress={onSuccess} />
            <ButtonComponent title={cancelButtonTitle} onPress={onCancel} />
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modal: {
    flex: 1,
    alignItems: 'center',
    textAlign: 'center',
    justifyContent: 'center',
  },
  modalView: {
    width: '95%', // Фіксована ширина
    height: '50%', // Фіксована висота
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5, // Для Android
  },
  buttonContainerModal: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
