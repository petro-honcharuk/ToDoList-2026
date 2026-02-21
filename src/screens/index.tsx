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
    showModalAdd,
    closeModalAdd,
    addItem,
    modalAddVisible,
    searchItem,
    searchText,
    setSearchText,
    showModalDelete,
    closeModalDelete,
    modalDeleteVisible,
    deleteItem,
    setSelectedItem,
    selectedItem,
    modalEditVisible,
    showModalEdit,
    closeModalEdit,
    editItem,
  } = useToDo();
  return (
    <View>
      <TitleComponent title="ToDoList" />
      <HeaderComponent
        onPress={showModalAdd}
        onSearch={setSearchText}
        searchQuery={searchText}
      />
      <AddModal
        visible={modalAddVisible}
        onClose={closeModalAdd}
        onAdd={addItem}
      />
      {selectedItem && (
        <DeleteModal
          visible={modalDeleteVisible}
          onDelete={deleteItem}
          closeModalDelete={closeModalDelete}
          idItem={selectedItem.id}
        />
      )}
      {selectedItem && (
        <EditModal
          visible={modalEditVisible}
          onEdit={editItem}
          onClose={closeModalEdit}
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
                  showModalDelete();
                  setSelectedItem(item);
                }}
              />
              <MaterialIcons
                name="edit"
                size={24}
                color="black"
                onPress={() => {
                  showModalEdit();
                  setSelectedItem(item);
                }}
              />
            </View>
          </View>
        )}
      ></FlatList>
    </View>
  );
};
