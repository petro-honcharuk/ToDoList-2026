import { useState } from 'react';

import {
  FlatList,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

import HeaderComponent from '@/src/components/HeaderComponent';
import ModalOptions from '@/src/components/ModalOptions';
import ModalSearchComponent from '@/src/components/ModalSearchComponent';
import { styles } from '@/src/style';
import { ItemDate } from '@/src/types/types';

export const HomeScreen = () => {
  const [text, setText] = useState('');
  const [listOfItem, setListOfItem] = useState<ItemDate[]>([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedItem, setSelectedItem] = useState<ItemDate | null>(null);
  const [modalSearchVisible, setModalSearchVisible] = useState(false);
  const [filtredList, setFiltredList] = useState<ItemDate[]>([]);

  const handlerAdd = () => {
    if (text) {
      setListOfItem([
        ...listOfItem,
        { id: Math.floor(Math.random() * (100000 - 0 + 1)) + 0, title: text },
      ]);
    }
    setText('');
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
      <HeaderComponent />
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
          <TouchableOpacity style={styles.button} onPress={handlerAdd}>
            <Text>Add</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              setModalSearchVisible(true);
              setFiltredList(listOfItem);
            }}
          >
            <Text>Search</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={{ marginTop: 20 }}>
        <FlatList<ItemDate>
          data={listOfItem}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <TouchableOpacity onPress={() => openModalFirst(item)}>
              <Text style={styles.text}>{item.title}</Text>
            </TouchableOpacity>
          )}
        />
      </View>
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
