import { useState, useMemo } from 'react';

import { ItemDate } from '../types/types';

const getRecordID = () => Math.floor(Math.random() * (100000 - 0 + 1)) + 0;

export const useToDo = () => {
  const [selectedItem, setSelectedItem] = useState<ItemDate | null>(null);
  const [listOfItem, setListOfItem] = useState<ItemDate[]>([]);
  const [searchText, setSearchText] = useState('');
  const [modal, setModal] = useState<'add' | 'edit' | 'delete' | null>(null);
  const [filter, setFilter] = useState<'all' | 'completed' | 'incomplete'>(
    'all'
  );

  const addItem = (title: string) => {
    const record = { id: getRecordID(), title, completed: false };

    setListOfItem([...listOfItem, record]);
  };

  const searchItem = useMemo(() => {
    if (searchText === '' && filter === 'all') return listOfItem;

    return listOfItem.filter((item) => {
      const isMatch = item.title
        .toLowerCase()
        .includes(searchText.toLowerCase());

      const isCompleted =
        filter === 'completed'
          ? item.completed === true
          : filter === 'incomplete'
            ? item.completed === false
            : true;

      return isMatch && isCompleted;
    });
  }, [listOfItem, searchText, filter]);

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
          ? { ...listOfItem, completed: !listOfItem.completed }
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
    filter,
    setFilter,
  };
};
