import { styles } from "@/src/style";
import React from "react";
import { Text, View } from "react-native";

const HeaderComponent = () => {
  return (
    <View style={styles.headerList}>
      <Text style={styles.headerTitle}> My To Do List</Text>
    </View>
  );
};

export default HeaderComponent;
