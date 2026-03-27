import React from 'react';

import { Modal, StyleSheet, View } from 'react-native';

import Button from './Button';
import HeaderComponent from './HeaderComponent';
import Spacer from './Spacer';
type Props = {
  visible: boolean;
  onAdd: (text: string) => void;
  //itemId: number;
  onCancel: () => void;
  text: string;
  onClose: () => void;
};

const ModalOptionsAdd = ({
  visible,
  onCancel,
  onAdd,
  text,
  onClose,
}: Props) => {
  return (
    <Modal visible={visible}>
      <View style={stylesDelete.containerModal}>
        <HeaderComponent title="Do you want add new item?" />
        <Spacer />

        <Button
          title="Add"
          onPress={() => {
            onAdd(text);
            onCancel();
            onClose();
          }}
        />
        <Spacer height={15} />
        <Button title="Cansel" onPress={onCancel} />
      </View>
    </Modal>
  );
};

export default ModalOptionsAdd;

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
