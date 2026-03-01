import React from 'react';

import { StyleSheet, Text } from 'react-native';

import {
  Menu,
  MenuOption,
  MenuOptions,
  MenuTrigger,
} from 'react-native-popup-menu';

export const ButtonMenu = () => {
  return (
    <Menu>
      <MenuTrigger style={styles.button}>
        <Text style={styles.buttonText}>All</Text>
      </MenuTrigger>
      <MenuOptions customStyles={optionsStyles}>
        <MenuOption text="All" />
        <MenuOption text="Complette" />
        <MenuOption text="Incomplette" />
      </MenuOptions>
    </Menu>
  );
};
const optionsStyles = {
  optionsContainer: {
    height: 95,
    width: 84,
    padding: 3,
    backgroundColor: 'white',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#6C63FF',
    marginTop: 38,
    textAlign: 'center',
  },

  optionText: {
    color: '#6C63FF',
    fontSize: 10,
  },

  optionWrapper: {
    padding: 8,
  },
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,
  },
  button: {
    backgroundColor: '#6C63FF',
    alignItems: 'center',
    justifyContent: 'center',
    width: 85,
    height: 38,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
  },
});
