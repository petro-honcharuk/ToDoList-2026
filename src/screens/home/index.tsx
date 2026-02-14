import { useState } from 'react';

import {
  FlatList,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

// import HeaderComponent from '@/src/components/HeaderComponent';

import Button from '@/src/components/Button';
import ModalAdd from '@/src/components/ModalAdd';
import ModalOptions from '@/src/components/ModalOptions';
import ModalSearchComponent from '@/src/components/ModalSearchComponent';
import Spacer from '@/src/components/Spacer';
import { styles } from '@/src/style';
import { ItemDate } from '@/src/types/types';

export const HomeScreen = () => {
  const [text, setText] = useState('');
  const [listOfItem, setListOfItem] = useState<ItemDate[]>([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedItem, setSelectedItem] = useState<ItemDate | null>(null);
  const [modalSearchVisible, setModalSearchVisible] = useState(false);
  const [filtredList, setFiltredList] = useState<ItemDate[]>([]);
  const [modalAdd, setModalAdd] = useState(false);

  const handlerAdd = (text: string) => {
    if (text) {
      setListOfItem([
        ...listOfItem,
        { id: Math.floor(Math.random() * (100000 - 0 + 1)) + 0, title: text },
      ]);
    }
    setText('');
    console.log('item add');
  };
  const handlerDelete = (item: number) => {
    setListOfItem(listOfItem.filter((i) => i.id !== item));

    setModalVisible(false);
  };
  const handlerChange = (id: number, newText: string) => {
    setListOfItem((prev) =>
      prev.map((item) => (item.id === id ? { ...item, title: newText } : item))
    );
  };
  const handlerSearch = (query: string) => {
    const resultSearch = listOfItem.filter((item) =>
      item.title.toLowerCase().includes(query.toLowerCase())
    );
    setFiltredList(resultSearch);
  };

  const openModalFirst = (item: ItemDate) => {
    setSelectedItem(item);
    setModalVisible(true);
  };

  return (
    <View style={styles.container}>
      {/* <HeaderComponent title="My To Do List" /> */}
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
          <Button title="Add" onPress={() => setModalAdd(true)} />
          <Button
            title="Search"
            onPress={() => {
              setModalSearchVisible(true);
              setFiltredList(listOfItem);
            }}
          />
        </View>
      </View>
      <Spacer height={20} />

      <View>
        <FlatList<ItemDate>
          data={listOfItem}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={styles.text}
              onPress={() => openModalFirst(item)}
            >
              <Text>{item.title}</Text>
            </TouchableOpacity>
          )}
        />
      </View>

      <ModalAdd
        visible={modalAdd}
        onClose={() => setModalAdd(false)}
        onAdd={handlerAdd}
      />

      {selectedItem && (
        <ModalOptions
          visible={modalVisible}
          onClose={() => setModalVisible(false)}
          onDelete={handlerDelete}
          onChange={handlerChange}
          content={selectedItem.title}
          itemId={selectedItem.id}
        />
      )}
      {modalSearchVisible && (
        <ModalSearchComponent
          onClose={() => setModalSearchVisible(false)}
          onSearch={handlerSearch}
          results={filtredList}
          onChoise={openModalFirst}
        />
      )}
    </View>
  );
};
