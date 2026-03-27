import React, { useState } from 'react';

import { Modal, TextInput, View } from 'react-native';

import { styles } from '../style';

import Button from './Button';
import HeaderComponent from './HeaderComponent';
import ModalOptionsAdd from './ModalOptionAdd';

type Props = {
  visible: boolean;
  onClose: () => void;
  onAdd: (text: string) => void;
};

const ModalAdd = ({ visible, onClose, onAdd }: Props) => {
  const [modalAddVisible, setModalAddVisible] = useState(false);
  const [text, setText] = useState<string>('');

  return (
    <Modal visible={visible}>
      <View style={styles.container}>
        <HeaderComponent title="Add Item" />
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Введіть завдання"
            onChangeText={setText}
            value={text}
            multiline
            textAlignVertical="top"
          ></TextInput>
          <View style={styles.buttonContainer}>
            <Button title="Add" onPress={() => setModalAddVisible(true)} />
            <Button title="Close" onPress={onClose} />
          </View>
        </View>
      </View>

      <ModalOptionsAdd
        visible={modalAddVisible}
        onCancel={() => setModalAddVisible(false)}
        onAdd={onAdd}
        text={text}
        onClose={() => {
          setText('');
          setModalAddVisible(false);
        }}
      />
    </Modal>
  );
};

export default ModalAdd;
