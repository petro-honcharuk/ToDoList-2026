import React from 'react';

import { Text, View, Image } from 'react-native';

import { IMAGES } from '../constants/images';
import { createStyles, useStyles } from '../theme/hooks/useStyles.hook';

export const EmptyState = () => {
  const styles = useStyles(stylesheet);
  return (
    <View style={styles.emptyContainer}>
      <Image style={styles.emptyImage} source={IMAGES.EMPTY} />
      <Text style={styles.emptyText}>Empty...</Text>
    </View>
  );
};

const stylesheet = createStyles((theme) => ({
  emptyContainer: {
    flex: 1,
    alignItems: 'center',
    paddingTop: 20,
  },
  emptyImage: {
    width: '42%',
    height: '32%',
  },
  emptyText: {
    fontSize: 20,
    color: theme.colors.text,
    fontFamily: theme.fonts.bold,
    marginTop: 40,
  },
}));
