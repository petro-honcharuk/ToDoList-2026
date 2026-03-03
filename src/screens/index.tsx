import React from 'react';

import { FlatList, View } from 'react-native';

import { AddButtonComponent } from '../components/AddButtonComponent';
import { EmptyState } from '../components/EmptyState';
import { HeaderComponent } from '../components/Header';
import { ItemComponent } from '../components/ItemComponent';
import { AddModal } from '../components/modal/AddModal';
import { DeleteModal } from '../components/modal/DeleteModal';
import { EditModal } from '../components/modal/EditModal';
import { useToDo } from '../hooks/useToDo';
import { createStyles, useStyles } from '../theme/hooks/useStyles.hook';
import { ItemDate } from '../types/types';

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

  const handlerPressDelete = (item: ItemDate) => {
    setSelectedItem(item);
    setModal('delete');
  };
  const handlerPressEdit = (item: ItemDate) => {
    setSelectedItem(item);
    setModal('edit');
  };
  const handlerPressAdd = () => {
    setModal('add');
  };

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

        <View style={styles.body}>
          <FlatList
            data={searchItem}
            ListEmptyComponent={<EmptyState />}
            contentContainerStyle={styles.list}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => (
              <ItemComponent
                item={item}
                onDelete={() => handlerPressDelete(item)}
                onEdit={() => handlerPressEdit(item)}
                onToggle={onToggle}
              />
            )}
          />
          <AddButtonComponent onAdd={handlerPressAdd} />
        </View>
      </View>

      <AddModal
        visible={modal === 'add'}
        onClose={() => setModal(null)}
        onAdd={addItem}
      />

      <DeleteModal
        visible={modal === 'delete'}
        onDelete={deleteItem}
        closeModalDelete={() => setModal(null)}
        idItem={selectedItem?.id}
      />

      <EditModal
        visible={modal === 'edit'}
        onEdit={editItem}
        onClose={() => setModal(null)}
        idItem={selectedItem?.id}
        titleItem={selectedItem?.title}
      />
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

  body: {
    flex: 1,
  },
  list: {
    flex: 1,
    width: '70%',
    paddingBottom: 100,
    marginTop: '4%',
    marginLeft: '15%',
  },
}));
