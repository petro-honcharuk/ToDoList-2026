import React from 'react';

import { StyleSheet, Text } from 'react-native';

import {
  Menu,
  MenuOption,
  MenuOptions,
  MenuOptionsCustomStyle,
  MenuTrigger,
} from 'react-native-popup-menu';

export type ButtonMenuProps = {
  filter: 'all' | 'completed' | 'incomplete';
  setFilter: (filter: 'all' | 'completed' | 'incomplete') => void;
};

const options = [
  { value: 'all', label: 'All' },
  { value: 'completed', label: 'Completed' },
  { value: 'incomplete', label: 'Incomplete' },
];

export const ButtonMenu = ({ filter, setFilter }: ButtonMenuProps) => {
  const selectedFilter = options.find(
    (option) => option.value === filter
  )?.label;

  const onSelect = (value: 'all' | 'completed' | 'incomplete') => {
    setFilter(value);
  };

  return (
    <Menu onSelect={onSelect}>
      <MenuTrigger style={styles.button}>
        <Text style={styles.buttonText}>{selectedFilter}</Text>
      </MenuTrigger>
      <MenuOptions customStyles={optionsStyles}>
        {options.map((option) => (
          <MenuOption
            key={option.value}
            value={option.value}
            text={option.label}
          />
        ))}
      </MenuOptions>
    </Menu>
  );
};

const optionsStyles: MenuOptionsCustomStyle = {
  optionsContainer: {
    height: 95,
    width: 84,
    padding: 3,
    backgroundColor: 'white',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#6C63FF',
    marginTop: 38,
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
