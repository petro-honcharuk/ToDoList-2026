import { useState, useMemo } from 'react';

import { ItemDate } from '../types/types';

export const useToDo = () => {
  const [modalAddVisible, setModalAddVisible] = useState(false);
  const [modalEditVisible, setModalEditVisible] = useState(false);
  const [modalDeleteVisible, setModalDeleteVisible] = useState(false);
  const [selectedItem, setSelectedItem] = useState<ItemDate | null>(null);
  const [listOfItem, setListOfItem] = useState<ItemDate[]>([]);
  const [searchText, setSearchText] = useState('');

  const showModalAdd = () => {
    setModalAddVisible(true);
  };
  const closeModalAdd = () => {
    setModalAddVisible(false);
  };
  const showModalEdit = () => {
    setModalEditVisible(true);
  };
  const closeModalEdit = () => {
    setModalEditVisible(false);
  };
  const showModalDelete = () => {
    setModalDeleteVisible(true);
  };
  const closeModalDelete = () => {
    setModalDeleteVisible(false);
  };
  const getId = () => {
    return Math.floor(Math.random() * (100000 - 0 + 1)) + 0;
  };
  const addItem = (text: string) => {
    setListOfItem([...listOfItem, { id: getId(), title: text }]);
  };
  const searchItem = useMemo(() => {
    if (searchText === '') return listOfItem;
    return listOfItem.filter((item) =>
      item.title.toLowerCase().includes(searchText.toLowerCase())
    );
  }, [listOfItem, searchText]);

  const deleteItem = (id: number) => {
    setListOfItem((prev) => prev.filter((item) => item.id !== id));
  };

  const editItem = (id: number, newText: string) => {
    setListOfItem((prev) =>
      prev.map((item) => (item.id === id ? { ...item, title: newText } : item))
    );
  };

  return {
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
  };
};
