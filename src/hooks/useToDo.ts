import { useState, useMemo } from 'react';

import { ItemDate } from '../types/types';

export const useToDo = () => {
  const [selectedItem, setSelectedItem] = useState<ItemDate | null>(null);
  const [listOfItem, setListOfItem] = useState<ItemDate[]>([]);
  const [searchText, setSearchText] = useState('');
  const [modal, setModal] = useState<'add' | 'edit' | 'delete' | null>(null);
  // const [filter, setFilter] = useState<
  //   'all' | 'completted' | 'incompletted' | null
  // >(null);

  const getId = () => {
    return Math.floor(Math.random() * (100000 - 0 + 1)) + 0;
  };
  const addItem = (text: string) => {
    if (text) setListOfItem([...listOfItem, { id: getId(), title: text }]);
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
  const onToggle = (id: number) => {
    setListOfItem((prev) =>
      prev.map((listOfItem) =>
        listOfItem.id === id
          ? { ...listOfItem, completted: !listOfItem.completted }
          : listOfItem
      )
    );
  };

  return {
    addItem,
    setSearchText,
    searchItem,
    searchText,
    deleteItem,
    setSelectedItem,
    selectedItem,
    editItem,
    setModal,
    modal,
    onToggle,
  };
};
