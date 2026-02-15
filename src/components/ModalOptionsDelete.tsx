import React from 'react';

import { Modal, StyleSheet, View } from 'react-native';

import Button from './Button';
import HeaderComponent from './HeaderComponent';
import Spacer from './Spacer';
type Props = {
  visible: boolean;
  onDelete: (id: number) => void;
  itemId: number;
  onCancel: () => void;
};

const ModalOptionsDelete = ({ visible, onDelete, itemId, onCancel }: Props) => {
  return (
    <Modal visible={visible}>
      <View style={stylesDelete.containerModal}>
        <HeaderComponent title="Confirm the deletion?" />
        <Spacer height={20} />

        <Button title="Delete" onPress={() => onDelete(itemId)} />
        <Spacer height={15} />
        <Button title="Cansel" onPress={onCancel} />
      </View>
    </Modal>
  );
};

export default ModalOptionsDelete;

const stylesDelete = StyleSheet.create({
  containerModal: {
    alignItems: 'center',
    justifyContent: 'center',
    //backgroundColor: "green",
    width: '70%',
    height: '30%',
    marginTop: '50%',
    borderRadius: 10,
    marginLeft: '15%',
    borderWidth: 2,
  },
  text: {
    margin: 20,
    fontSize: 18,
    fontWeight: 'bold',
    alignItems: 'center',
  },
});
