import React from 'react';

import { Text, View, Image, StyleSheet } from 'react-native';

import { Colors } from '../theme/colors';
import { fonts } from '../theme/font';
import { useTheme } from '../theme/ThemeContext';

export const EmptyState = () => {
  const { colors } = useTheme();
  const styles = createStyles(colors);
  return (
    <View style={styles.emptyContainer}>
      <Image
        style={styles.emptyImage}
        source={require('../../assets/icons/Detective-check-footprint 1.png')}
      />
      <Text style={styles.emptyText}>Empty...</Text>
    </View>
  );
};
const createStyles = (colors: Colors) =>
  StyleSheet.create({
    emptyContainer: {
      flex: 1,
      //justifyContent: 'center',
      alignItems: 'center',
      paddingTop: 20,
    },
    emptyImage: {
      width: '42%',
      height: '32%',
    },
    emptyText: {
      fontSize: 20,
      color: colors.text,
      fontFamily: fonts.bold,
      marginTop: 40,
    },
  });
