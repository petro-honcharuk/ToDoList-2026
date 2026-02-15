import React, { useEffect, useState } from 'react';

import { Modal, StyleSheet, TextInput, View } from 'react-native';

import Button from './Button';
import HeaderComponent from './HeaderComponent';
import ModalOptionsDelete from './ModalOptionsDelete';
type Props = {
  visible: boolean;
  onClose: () => void;
  onDelete: (id: number) => void;
  onChange: (id: number, text: string) => void;
  content: string;
  itemId: number;
  modalMode: 'edit' | 'delete' | null;
};
export default function ModalOptions({
  visible,
  onClose,
  onDelete,
  onChange,
  content,
  itemId,
  modalMode,
}: Props) {
  const [modalDeleteVisible, setModalDeleteVisible] = useState(false);
  const [changeText, setChangeText] = useState(content);
  useEffect(() => {
    setChangeText(content);
  }, [content]);
  return (
    <Modal visible={visible}>
      <HeaderComponent title="Change your item" />
      <View style={stylesModal.containerModal}>
        <TextInput
          style={stylesModal.input}
          value={changeText}
          onChangeText={setChangeText}
          multiline
          textAlignVertical="top"
        ></TextInput>

        <View style={stylesModal.conteinerButton}>
          {modalMode === 'delete' && (
            <Button
              title="Delete"
              onPress={() => {
                setModalDeleteVisible(true);
                //onDelete(itemId);
              }}
            />
          )}
          {modalMode === 'edit' && (
            <Button
              title="Edit"
              onPress={() => {
                onChange(itemId, changeText);
                onClose();
              }}
              disabled={changeText === content}
            />
          )}
          <Button title="Back" onPress={onClose} />
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
