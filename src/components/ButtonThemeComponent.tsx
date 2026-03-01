import React from 'react';

import { TouchableOpacity, Image, View } from 'react-native';

import { ICONS } from '../constants/icons';
import { createStyles, useStyles } from '../theme/hooks/useStyles.hook';
import { useTheme } from '../theme/hooks/useTheme.hook';

export const ButtonThemeComponent = () => {
  const { theme, setTheme } = useTheme();
  const styles = useStyles(stylesheet);

  const toggleTheme = () => {
    setTheme(theme.variant === 'light' ? 'dark' : 'light');
  };

  return (
    <TouchableOpacity onPress={toggleTheme}>
      <View
        style={[
          styles.iconContainer,
          { backgroundColor: theme.colors.primary },
        ]}
      >
        <Image source={theme.variant === 'light' ? ICONS.MOON : ICONS.SUN} />
      </View>
    </TouchableOpacity>
  );
};

const stylesheet = createStyles(() => ({
  iconContainer: {
    width: 38,
    height: 38,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
  },
}));
