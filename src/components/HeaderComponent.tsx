import React from 'react';

import { TextInput, View } from 'react-native';

import { createStyles, useStyles } from '../theme/hooks/useStyles.hook';

import { ButtonMenu } from './ButtonMenu';
import { ButtonThemeComponent } from './ButtonThemeComponent';

type Props = {
  onPress?: () => void;
  onSearch: (query: string) => void;
  searchQuery: string;
};

export const HeaderComponent = ({ onSearch, searchQuery }: Props) => {
  const styles = useStyles(stylesheet);

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Search note..."
        value={searchQuery}
        onChangeText={onSearch}
      />
      <ButtonMenu />
      <ButtonThemeComponent />
    </View>
  );
};

const stylesheet = createStyles((theme) => ({
  container: {
    flexDirection: 'row',
    gap: 16,
    backgroundColor: theme.colors.background,
  },
  input: {
    height: 38,
    width: '80%',
    borderWidth: 1,
    borderColor: theme.colors.borderColor,
    borderRadius: 5,
    paddingTop: 8,
    paddingRight: 16,
    paddingLeft: 16,
    paddingBottom: 8,
    fontSize: 16,
    fontFamily: theme.fonts.regular,
    color: theme.colors.text,
  },
}));
