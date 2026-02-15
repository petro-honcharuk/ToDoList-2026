import { useMemo, useState } from "react";

import { ItemDate } from "@/src/types/types";

export const useToDoList = () => {
  const [listOfItem, setListOfItem] = useState<ItemDate[]>([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [modal, setModal] = useState<"add" | "edit" | "delete" | null>(null);

  const filteredList = useMemo(() => {
    return listOfItem.filter((item) =>
      item.title.toLowerCase().includes(searchQuery.toLowerCase()),
    );
  }, [listOfItem, searchQuery]);

  const addItem = (text: string) => {
    const newItem = {
      id: Math.floor(Math.random() * (100000 - 0 + 1)) + 0,
      title: text,
    };
    setListOfItem((prev) => [...prev, newItem]);
  };

  const removeItem = (id: number) => {
    setListOfItem((prev) => prev.filter((item) => item.id !== id));
  };

  const editItem = (id: number, newText: string) => {
    setListOfItem((prev) =>
      prev.map((item) => (item.id === id ? { ...item, title: newText } : item)),
    );
  };

  return {
    listOfItem,
    setListOfItem,
    filteredList,
    searchQuery,
    setSearchQuery,
    addItem,
    removeItem,
    editItem,
  };
};
