import React, { useState } from 'react';

import {
  FlatList,
  Modal,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

import { styles } from '@/src/style';
import { ItemDate } from '@/src/types/types';

import Button from './Button';
type Props = {
  onClose: () => void;
  onSearch: (query: string) => void;
  results: ItemDate[];
  onChoise: (item: ItemDate) => void;
};
const ModalSearchComponent = ({
  onClose,
  onSearch,
  results,
  onChoise,
}: Props) => {
  const [query, setQuery] = useState('');

  return (
    <Modal visible={true}>
      <View style={stylesSearch.containerModal}>
        <TextInput
          style={styles.text}
          placeholder="Search"
          value={query}
          onChangeText={(query) => {
            setQuery(query);
            onSearch(query);
          }}
        ></TextInput>
        <FlatList<ItemDate>
          data={results}
          renderItem={({ item }) => (
            <TouchableOpacity
              onPress={() => {
                onChoise(item);
                onClose();
              }}
            >
              <Text style={stylesSearch.text}>{item.title}</Text>
            </TouchableOpacity>
          )}
        />
        <Button
          title="Cancel"
          onPress={() => {
            onClose();
            setQuery('');
          }}
        />
      </View>
    </Modal>
  );
};

export default ModalSearchComponent;

const stylesSearch = StyleSheet.create({
  containerModal: {
    alignItems: 'center',
    justifyContent: 'center',
    //backgroundColor: "green",
    width: '96%',
    height: '80%',
    marginTop: '20%',
    borderRadius: 10,
    marginLeft: '2%',
    borderWidth: 2,
  },
  text: {
    margin: 5,
    borderWidth: 2,
    width: 280,
    borderRadius: 5,
  },
});
