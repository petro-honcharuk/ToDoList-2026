import { useState, useMemo } from 'react';

import { ItemDate } from '../types/types';

const getRandomInt = () => {
  return Math.floor(Math.random() * (100000000 - 0 + 1)) + 0;
};

export const useToDo = () => {
  const [selectedItem, setSelectedItem] = useState<ItemDate | null>(null);
  const [listOfItem, setListOfItem] = useState<ItemDate[]>([]);
  const [searchText, setSearchText] = useState('');
  const [modal, setModal] = useState<'add' | 'edit' | 'delete' | null>(null);

  const addItem = (text: string) => {
    const randomId = getRandomInt();

    setListOfItem([...listOfItem, { id: randomId, title: text }]);
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

  const onCloseModal = () => {
    setModal(null);
    setSelectedItem(null);
  };

  const onShowModal = (modal: 'add' | 'edit' | 'delete') => {
    setModal(modal);
  };

  return {
    searchItem,
    searchText,
    selectedItem,
    modal,
    addItem,
    setSearchText,
    deleteItem,
    setSelectedItem,
    editItem,
    onShowModal,
    onCloseModal,
  };
};
