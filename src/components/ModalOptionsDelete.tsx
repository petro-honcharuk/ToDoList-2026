import React from 'react';

import { Modal, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import { styles } from '../style';
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
        <Text style={stylesDelete.text}>Do you confirm the deletion?</Text>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            onDelete(itemId);
          }}
        >
          <Text>Delete</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={onCancel}>
          <Text>Cancel</Text>
        </TouchableOpacity>
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
