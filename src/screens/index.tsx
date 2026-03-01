import React from 'react';

import { FlatList, View } from 'react-native';

import Ionicons from '@expo/vector-icons/Ionicons';
import { useFonts } from 'expo-font';

import { EmptyState } from '../components/EmptyState';
import { HeaderComponent } from '../components/Header';
import { CustomInput } from '../components/inputs/CInput';
import { ItemComponent } from '../components/ItemComponent';
import { AddModal } from '../components/modal/AddModal';
import { DeleteModal } from '../components/modal/DeleteModal';
import { EditModal } from '../components/modal/EditModal';
import { FONTS } from '../constants/fonts';
import { useToDo } from '../hooks/useToDo';
import { createStyles, useStyles } from '../theme/hooks/useStyles.hook';

export const HomeScreen = () => {
  const styles = useStyles(stylesheet);

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
    filter,
    setFilter,
    onToggle,
  } = useToDo();

  const [fontsLoaded] = useFonts({
    'Kanit-Regular': FONTS.REGULAR,
    'Kanit-Bold': FONTS.BOLD,
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View style={styles.main}>
      <View style={styles.container}>
        <HeaderComponent
          onPress={() => {
            setModal('add');
          }}
          onSearch={setSearchText}
          searchQuery={searchText}
          filter={filter}
          setFilter={setFilter}
        />

        <View style={styles.BODY}>
          <FlatList
            data={searchItem}
            ListEmptyComponent={<EmptyState />}
            contentContainerStyle={styles.LIST}
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
            style={styles.addButton}
            onPress={() => {
              setModal('add');
            }}
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
    </View>
  );
};

const stylesheet = createStyles((theme) => ({
  main: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: theme.colors.background,
  },
  container: {
    width: '50%',
    height: '100%',
    backgroundColor: theme.colors.background,
  },
  head: {
    height: '20%',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: theme.colors.background,
  },

  header: {
    width: '100%',
  },
  BODY: {
    flex: 1,
  },
  LIST: {
    flex: 1,
    width: '70%',
    paddingBottom: 100,
    marginTop: '4%',
    marginLeft: '15%',
  },
  addButton: {
    position: 'absolute',
    right: 20,
    bottom: 20,
  },
  NOTE: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    marginVertical: 5,
    borderBottomWidth: 1,
    borderColor: theme.colors.borderColor,
  },
  noteText: {
    flex: 1,
    fontSize: 20,
    fontFamily: theme.fonts.regular,
    padding: 20,
    color: theme.colors.text,
  },
  iconContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    margin: 8,
    padding: 5,
  },
  checkBox: {
    width: 26,
    height: 26,
    borderWidth: 1,
    borderRadius: 2,
    borderColor: theme.colors.borderColor,
    //tintColor: '#6C63FF',
  },
}));
