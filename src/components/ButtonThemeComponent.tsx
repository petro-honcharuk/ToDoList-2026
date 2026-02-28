import React from 'react';

import { StyleSheet, TouchableOpacity, Image } from 'react-native';

import { useTheme } from '../theme/ThemeContext';

export const ButtonThemeComponent = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <TouchableOpacity onPress={toggleTheme}>
      <Image
        source={
          theme === 'ligth'
            ? require('../../assets/icons/moon.png')
            : require('../../assets/icons/sun.png')
        }
        style={styles.themeImage}
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  themeImage: {
    height: 38,
    width: 38,
  },
});
