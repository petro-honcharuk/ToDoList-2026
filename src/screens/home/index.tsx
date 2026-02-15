import React, { useMemo, useState } from "react";

import { FlatList, StyleSheet, Text, View } from "react-native";

import { SearchHeader } from "@/src/components/SearchHeader";
import { AddModal } from "@/src/components/modals/AddModal";
import { EditModal } from "@/src/components/modals/EditModal";
import { RemoveModal } from "@/src/components/modals/RemoveModal";
import { ItemDate } from "@/src/types/types";

export const HomeScreen = () => {
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

  const closeModal = () => {
    setModal(null);
  };

  const showAddModal = () => {
    setModal("add");
  };

  return (
    <View style={styles.container}>
      <SearchHeader
        searchQuery={searchQuery}
        onSearch={setSearchQuery}
        onPressAdd={showAddModal}
      />

      <FlatList
        data={filteredList}
        renderItem={({ item }) => {
          return (
            <View>
              <Text>{item.title}</Text>
            </View>
          );
        }}
      />

      <AddModal
        visible={modal === "add"}
        onClose={closeModal}
        onAdd={addItem}
      />

      <EditModal visible={modal === "edit"} />

      <RemoveModal visible={modal === "delete"} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    paddingHorizontal: "10%",
    paddingVertical: 40,
  },
});
