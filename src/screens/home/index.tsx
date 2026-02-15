import { useState } from 'react';

import { FlatList, Text, TouchableOpacity, View } from 'react-native';

// import HeaderComponent from '@/src/components/HeaderComponent';

import { SafeAreaView } from 'react-native-safe-area-context';

import Button from '@/src/components/Button';
import HeaderForArt from '@/src/components/HeaderForArt';
import ModalAdd from '@/src/components/ModalAdd';
import ModalOptions from '@/src/components/ModalOptions';
//import ModalSearchComponent from '@/src/components/ModalSearchComponent';
import Spacer from '@/src/components/Spacer';
import { styles } from '@/src/style';
import { ItemDate } from '@/src/types/types';

export const HomeScreen = () => {
  //const [text, setText] = useState('');
  const [listOfItem, setListOfItem] = useState<ItemDate[]>([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedItem, setSelectedItem] = useState<ItemDate | null>(null);
  //const [modalSearchVisible, setModalSearchVisible] = useState(false);
  const [filtredList, setFiltredList] = useState<ItemDate[]>([]);
  const [modalAdd, setModalAdd] = useState(false);
  const [modalMode, setModalMode] = useState<'edit' | 'delete' | null>(null);

  const handlerAdd = (text: string) => {
    if (!text) return;
    const newList = [
      ...listOfItem,
      { id: Math.floor(Math.random() * (100000 - 0 + 1)) + 0, title: text },
    ];
    setListOfItem(newList);

    setFiltredList(newList);
  };
  const handlerDelete = (id: number) => {
    setListOfItem((prev) => {
      const newList = prev.filter((item) => item.id !== id);
      setFiltredList(newList);
      return newList;
    });
    setModalVisible(false);
  };
  const handlerChange = (id: number, newText: string) => {
    setListOfItem((prev) => {
      const newList = prev.map((item) =>
        item.id === id ? { ...item, title: newText } : item
      );
      setFiltredList(newList);
      return newList;
    });
  };
  const handlerSearch = (query: string) => {
    if (query.trim() === '') {
      return setFiltredList(listOfItem);
    }
    const resultSearch = listOfItem.filter((item) =>
      item.title.toLowerCase().includes(query.toLowerCase())
    );
    setFiltredList(resultSearch);
  };

  const openModalOptionEdit = (item: ItemDate) => {
    setSelectedItem(item);
    setModalMode('edit');
    setModalVisible(true);
  };
  const openModalOptionDelete = (item: ItemDate) => {
    setSelectedItem(item);
    setModalMode('delete');
    setModalVisible(true);
  };
  const openModalOption = (item: ItemDate) => {
    setSelectedItem(item);

    setModalVisible(true);
  };

  return (
    <View style={styles.container}>
      {/* <HeaderComponent title="My To Do List" /> */}
      {/* <View style={styles.inputContainer}>
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
      </View> */}
      <SafeAreaView>
        <HeaderForArt
          onAdd={() => setModalAdd(true)}
          onSearch={handlerSearch}
        />
      </SafeAreaView>

      <Spacer height={20} />

      <View>
        <FlatList<ItemDate>
          data={filtredList}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={styles.textConteiner}
              onPress={() => openModalOption(item)}
            >
              <Text style={styles.text}>{item.title}</Text>
              <View style={styles.buttonContainer}>
                <Button
                  title="Edit"
                  onPress={() => openModalOptionEdit(item)}
                  disabled={false}
                />
                <Button
                  title="Del"
                  onPress={() => openModalOptionDelete(item)}
                />
              </View>
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
          modalMode={modalMode}
          onClose={() => setModalVisible(false)}
          onDelete={handlerDelete}
          onChange={handlerChange}
          content={selectedItem.title}
          itemId={selectedItem.id}
        />
      )}
      {/* {modalSearchVisible && (
        <ModalSearchComponent
          onClose={() => setModalSearchVisible(false)}
          onSearch={handlerSearch}
          results={filtredList}
          onChoise={openModalOption}
        />
      )} */}
    </View>
  );
};
