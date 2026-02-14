import React from 'react';

import { Modal, StyleSheet, Text, View } from 'react-native';

import Button from './Button';
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
        <Text style={stylesDelete.text}>Do you want add new item?</Text>
        <Button
          title="Add"
          onPress={() => {
            onAdd(text);
            onCancel();
            onClose();
          }}
        />
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
