import React, { useEffect, useState } from 'react';

import {
  Modal,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

import { styles } from '../style';

import ModalOptionsDelete from './ModalOptionsDelete';
type Props = {
  visible: boolean;
  onClose: () => void;
  onDelete: (id: number) => void;
  onChange: (id: number, text: string) => void;
  content: string;
  itemId: number;
};
export default function ModalOptions({
  visible,
  onClose,
  onDelete,
  onChange,
  content,
  itemId,
}: Props) {
  const [modalDeleteVisible, setModalDeleteVisible] = useState(false);
  const [changeText, setChangeText] = useState(content);
  useEffect(() => {
    setChangeText(content);
  }, [content]);
  return (
    <Modal visible={visible}>
      <View style={stylesModal.containerModal}>
        <TextInput
          style={stylesModal.input}
          value={changeText}
          onChangeText={setChangeText}
          multiline
          textAlignVertical="top"
        ></TextInput>

        <View style={stylesModal.conteinerButton}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              setModalDeleteVisible(true);
              //onDelete(itemId);
            }}
          >
            <Text>Delete</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              onChange(itemId, changeText);
              onClose();
            }}
          >
            <Text>Edit</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={onClose}>
            <Text>Back</Text>
          </TouchableOpacity>
        </View>
        <ModalOptionsDelete
          visible={modalDeleteVisible}
          onDelete={() => {
            onDelete(itemId);
            setModalDeleteVisible(false);
          }}
          itemId={itemId}
          onCancel={() => setModalDeleteVisible(false)}
        />
      </View>
    </Modal>
  );
}

const stylesModal = StyleSheet.create({
  containerModal: {
    //flexDirection: "row",

    alignItems: 'center',
    justifyContent: 'center',
    //backgroundColor: "green",
    width: '96%',
    height: '50%',
    marginTop: '10%',
    borderWidth: 2,
    borderRadius: 5,
    marginLeft: '2%',
  },
  input: {
    borderWidth: 2,
    borderColor: 'black',
    borderRadius: 5,
    width: '95%',
    marginTop: '10%',

    marginBottom: '10%',
  },
  conteinerButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    //backgroundColor: "red",
    width: '100%',
    height: '50%',
    marginBottom: '5%',
  },
});
