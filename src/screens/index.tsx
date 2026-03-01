import React from 'react';

import { FlatList, View } from 'react-native';

import Ionicons from '@expo/vector-icons/Ionicons';
//import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { useFonts } from 'expo-font';

import { EmptyState } from '../components/EmptyState';
import { HeaderComponent } from '../components/HeaderComponent';
import { ItemComponent } from '../components/ItemComponent';
import { AddModal } from '../components/modal/AddModal';
import { DeleteModal } from '../components/modal/DeleteModal';
import { EditModal } from '../components/modal/EditModal';
import { TitleComponent } from '../components/TitleComponent';
import { useToDo } from '../hooks/useToDo';
import { useTheme } from '../theme/ThemeContext';
import { ItemDate } from '../types/types';

import { createStyles } from './index.Styles';

export const HomeScreen = () => {
  const { colors } = useTheme();
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
    onToggle,
  } = useToDo();
  const [fontsLoaded] = useFonts({
    'Kanit-Regular': require('../../assets/fonts/Kanit-Regular.ttf'),
    'Kanit-Bold': require('../../assets/fonts/Kanit-Bold.ttf'),
  });
  if (!fontsLoaded) {
    return null;
  }
  //const { colors } = useTheme();
  const indexStyles = createStyles(colors);

  return (
    <View style={indexStyles.main}>
      <View style={indexStyles.container}>
        <View style={indexStyles.head}>
          <TitleComponent title="TODO LIST" />
          <View style={indexStyles.header}>
            <HeaderComponent
              onPress={() => {
                setModal('add');
              }}
              onSearch={setSearchText}
              searchQuery={searchText}
            />
          </View>
        </View>

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
        <View style={indexStyles.BODY}>
          <FlatList<ItemDate>
            data={searchItem}
            ListEmptyComponent={<EmptyState />}
            contentContainerStyle={indexStyles.LIST}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => (
              <ItemComponent
                item={item}
                onDelete={() => {
                  setSelectedItem(item);
                  setModal('delete');
                }}
                onEdit={() => {
                  setSelectedItem(item);
                  setModal('edit');
                }}
                onToggle={onToggle}
              />
            )}
          />

          <Ionicons
            name="add-circle"
            size={50}
            color="#6C63FF"
            style={indexStyles.addButton}
            onPress={() => {
              setModal('add');
            }}
          />
        </View>
      </View>
    </View>
  );
};
