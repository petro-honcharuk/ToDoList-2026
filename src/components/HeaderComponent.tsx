import React from 'react';

import { Text, View } from 'react-native';

import { styles } from '@/src/style';

const HeaderComponent = () => {
  return (
    <View style={styles.headerList}>
      <Text style={styles.headerTitle}> My To Do List</Text>
    </View>
  );
};

export default HeaderComponent;
