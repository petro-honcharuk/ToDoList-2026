import React from 'react';

import { StyleSheet, TextInput, View } from 'react-native';

import { fonts } from '../theme/font';

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
        placeholder="Search note..."
        value={searchQuery}
        onChangeText={onSearch}
      ></TextInput>
      <ButtonComponent
        title="All"
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
    gap: 16,
  },
  input: {
    height: 38,
    width: '80%',
    borderWidth: 1,
    borderColor: '#6C63FF',
    borderRadius: 5,
    paddingTop: 8,
    paddingRight: 16,
    paddingLeft: 16,
    paddingBottom: 8,
    fontSize: 16,
    fontFamily: fonts.regular,
  },
});
