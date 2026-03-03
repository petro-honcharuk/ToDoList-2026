import React from 'react';

import { TextInput, View, Text } from 'react-native';

import { createStyles, useStyles } from '@/src/theme/hooks/useStyles.hook';

import { ButtonMenu } from './ButtonMenu';
import type { ButtonMenuProps } from './ButtonMenu';
import { ThemeSwitcher } from './ThemeSwitcher';

type Props = {
  onPress?: () => void;
  onSearch: (query: string) => void;
  searchQuery: string;
} & ButtonMenuProps;

export const HeaderComponent = ({
  onSearch,
  searchQuery,
  filter,
  setFilter,
}: Props) => {
  const styles = useStyles(stylesheet);

  return (
    <View>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>TODOLIST</Text>
      </View>
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          placeholder="Search note..."
          value={searchQuery}
          onChangeText={onSearch}
        />
        <ButtonMenu filter={filter} setFilter={setFilter} />
        <ThemeSwitcher />
      </View>
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
  titleContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 26,
    fontFamily: theme.fonts.bold,
    color: theme.colors.text,
    margin: 30,
  },
}));
