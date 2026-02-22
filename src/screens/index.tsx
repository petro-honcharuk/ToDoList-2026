import React, { useCallback } from 'react';

import { FlatList, View, Text, StyleSheet } from 'react-native';

import MaterialIcons from '@expo/vector-icons/MaterialIcons';

import { HeaderComponent } from '../components/HeaderComponent';
import { AddModal } from '../components/modals/AddModal';
import { DeleteModal } from '../components/modals/DeleteModal';
import { EditModal } from '../components/modals/EditModal';
import { TitleComponent } from '../components/TitleComponent';
import { useToDo } from '../hooks/useToDo';
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
    onShowModal,
    onCloseModal,
    modal,
  } = useToDo();

  const renderItem = useCallback(
    ({ item }: { item: ItemDate }) => (
      <View style={styles.itemsContainer}>
        <Text>{item.title}</Text>
        <View style={styles.iconContainer}>
          <MaterialIcons
            name="delete"
            size={24}
            color="black"
            onPress={() => {
              setSelectedItem(item);
              onShowModal('delete');
            }}
          />
          <MaterialIcons
            name="edit"
            size={24}
            color="black"
            onPress={() => {
              setSelectedItem(item);
              onShowModal('edit');
            }}
          />
        </View>
      </View>
    ),
    []
  );

  return (
    <View>
      <TitleComponent title="ToDoList" />
      <HeaderComponent
        onPress={() => {
          onShowModal('add');
        }}
        onSearch={setSearchText}
        searchQuery={searchText}
      />

      <FlatList
        data={searchItem}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
      />

      <AddModal
        visible={modal === 'add'}
        onClose={onCloseModal}
        onAdd={addItem}
      />

      <DeleteModal
        visible={modal === 'delete'}
        onDelete={deleteItem}
        closeModalDelete={onCloseModal}
        idItem={selectedItem?.id}
      />

      <EditModal
        visible={modal === 'edit'}
        onEdit={editItem}
        onClose={onCloseModal}
        idItem={selectedItem?.id}
        titleItem={selectedItem?.title}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  itemsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  iconContainer: {
    flexDirection: 'row',
    gap: 10,
  },
});
