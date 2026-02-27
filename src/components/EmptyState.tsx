import React from 'react';

import { Text, View, Image, StyleSheet } from 'react-native';

import { fonts } from '../theme/font';

export const EmptyState = () => {
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
const styles = StyleSheet.create({
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
    color: 'black',
    fontFamily: fonts.bold,
  },
});
