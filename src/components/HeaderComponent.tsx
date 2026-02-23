import React from 'react';

import { StyleSheet, TextInput, View } from 'react-native';

import { ButtonComponent } from './ButtonComponent';

type Props = {
  onPress: () => void;
  onSearch: (query: string) => void;
  searchQuery: string;
};

export const HeaderComponent = ({ onPress, onSearch, searchQuery }: Props) => {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Search..."
        value={searchQuery}
        onChangeText={onSearch}
      ></TextInput>
      <ButtonComponent
        title="Add"
        onPress={() => {
          onPress();
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    //alignItems: 'center',
    // justifyContent: 'center',
    //borderWidth: 2,
  },
  input: {
    height: 38,
    width: '80%',
    borderWidth: 1,
    borderRadius: 5,
    //margin: 5,
  },
});
