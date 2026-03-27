import React, { useState } from 'react';

import {
  StyleProp,
  StyleSheet,
  TextInput,
  TextStyle,
  View,
} from 'react-native';

import Button from '@/src/components/Button';

import Spacer from './Spacer';

type Props = {
  onSearch: (text: string) => void;
  onAdd: () => void;
  textStyle?: StyleProp<TextStyle>;
};

const HeaderForArt = ({ onSearch, onAdd, textStyle }: Props) => {
  const [text, setText] = useState('');
  return (
    <View style={stylesHeader.container}>
      <Spacer />
      <TextInput
        style={[stylesHeader.input, textStyle]}
        value={text}
        onChangeText={(text) => {
          setText(text);
          onSearch(text);
        }}
        multiline
        textAlignVertical="top"
      ></TextInput>
      <View>
        <Button
          title="Add"
          onPress={onAdd}
          style={{ marginHorizontal: '82%', top: -47, height: 45 }}
        />
      </View>
    </View>
  );
};

export default HeaderForArt;
const stylesHeader = StyleSheet.create({
  container: {
    //flex: 1,
    //flexDirection: 'row',
  },

  input: {
    width: '80%',
    height: 50,
    borderWidth: 2,
    borderRadius: 5,
  },
});
