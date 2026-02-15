import React from "react";

import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

type Props = {
  searchQuery: string;
  onSearch: (query: string) => void;
  onPressAdd: () => void;
};

export const SearchHeader = ({ searchQuery, onSearch, onPressAdd }: Props) => {
  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Search element by title"
        style={styles.input}
        value={searchQuery}
        onChangeText={onSearch}
      />

      <TouchableOpacity onPress={onPressAdd} style={styles.addButtonStyle}>
        <Text style={styles.addButtonText}>Add</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    gap: 20,
  },
  input: {
    width: "80%",
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: 5,
    height: 40,
    paddingHorizontal: 10,
  },
  addButtonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
  addButtonStyle: {
    borderWidth: 1,
    borderColor: "gray",
    backgroundColor: "green",
    borderRadius: 5,
    height: 40,
    paddingHorizontal: 150,
    alignItems: "center",
    justifyContent: "center",
  },
});
