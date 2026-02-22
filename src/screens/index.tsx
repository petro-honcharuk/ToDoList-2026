import React from 'react';

import { FlatList, View, Text } from 'react-native';

import MaterialIcons from '@expo/vector-icons/MaterialIcons';

import { AddModal } from '../components/AddModal';
import { DeleteModal } from '../components/DeleteModal';
import { EditModal } from '../components/EditModal';
import { HeaderComponent } from '../components/HeaderComponent';
import { TitleComponent } from '../components/TitleComponent';
import { useToDo } from '../hooks/useToDo';
import { styles } from '../style/style';
import { ItemDate } from '../types/types';

export const HomeScreen = () => {
  const {
    addItem,
    searchItem,
    searchText,
    setSearchText,
    deleteItem,
    setSelectedItem,
    selectedItem,
    editItem,
    setModal,
    modal,
  } = useToDo();
  return (
    <View>
      <TitleComponent title="ToDoList" />
      <HeaderComponent
        onPress={() => {
          setModal('add');
        }}
        onSearch={setSearchText}
        searchQuery={searchText}
      />

      <AddModal
        visible={modal === 'add'}
        onClose={() => setModal(null)}
        onAdd={addItem}
      />

      {selectedItem && (
        <DeleteModal
          visible={modal === 'delete'}
          onDelete={deleteItem}
          closeModalDelete={() => setModal(null)}
          idItem={selectedItem.id}
        />
      )}
      {selectedItem && (
        <EditModal
          visible={modal === 'edit'}
          onEdit={editItem}
          onClose={() => setModal(null)}
          idItem={selectedItem.id}
          titleItem={selectedItem.title}
        />
      )}
      <FlatList<ItemDate>
        data={searchItem}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.itemsContainer}>
            <Text>{item.title}</Text>
            <View style={styles.iconContainer}>
              <MaterialIcons
                name="delete"
                size={24}
                color="black"
                onPress={() => {
                  setSelectedItem(item);
                  setModal('delete');
                }}
              />
              <MaterialIcons
                name="edit"
                size={24}
                color="black"
                onPress={() => {
                  setSelectedItem(item);
                  setModal('edit');
                }}
              />
            </View>
          </View>
        )}
      ></FlatList>
    </View>
  );
};
