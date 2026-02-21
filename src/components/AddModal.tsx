import React, { useState } from 'react';

import { Modal, StyleSheet, TextInput, View } from 'react-native';

import { styles } from '../style/style';

import { ButtonComponent } from './ButtonComponent';

type Props = {
  visible: boolean;
  onClose: () => void;
  onAdd: (text: string) => void;
};

export const AddModal = ({ visible, onClose, onAdd }: Props) => {
  const [text, setText] = useState('');
  return (
    <Modal visible={visible} animationType="slide" transparent={true}>
      <View style={styles.modal}>
        <View style={styles.modalView}>
          <TextInput
            style={stylesAdd.input}
            placeholder="Add your item"
            value={text}
            onChangeText={setText}
          ></TextInput>

          <View style={styles.buttonContainerModal}>
            <ButtonComponent
              title="Add"
              onPress={() => {
                onAdd(text);
                setText('');
              }}
            />
            <ButtonComponent title="Close" onPress={onClose} />
          </View>
        </View>
      </View>
    </Modal>
  );
};

const stylesAdd = StyleSheet.create({
  input: {
    height: 45,
    width: '95%',
    borderWidth: 2,
    borderRadius: 8,
    margin: 20,
  },
  buttonCloseContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
