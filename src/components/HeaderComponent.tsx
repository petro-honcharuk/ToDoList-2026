import React from 'react';

import { Text, View } from 'react-native';

import { styles } from '@/src/style';
type Prop = {
  title: string;
};

const HeaderComponent = ({ title }: Prop) => {
  return (
    <View style={styles.headerList}>
      <Text style={styles.headerTitle}> {title}</Text>
    </View>
  );
};

export default HeaderComponent;
