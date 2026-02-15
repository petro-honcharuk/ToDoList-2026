import { useState } from "react";
import {
  Modal,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

type Props = {
  visible: boolean;
  onClose: () => void;
  onAdd: (text: string) => void;
};

export const AddModal = ({ visible, onClose, onAdd }: Props) => {
  const [text, setText] = useState("");

  const handlePressAdd = () => {
    onAdd(text);
    onClose();
    setText("");
  };

  return (
    <Modal visible={visible}>
      <View style={styles.modalContainerStyle}>
        <View style={styles.modalWindowStyle}>
          <TextInput
            placeholder="Enter your title"
            value={text}
            onChangeText={setText}
            style={styles.input}
          />

          <View style={styles.buttonsContainerStyle}>
            <TouchableOpacity
              onPress={handlePressAdd}
              style={styles.buttonAddStyle}
            >
              <Text style={styles.buttonAddTitleStyle}>Add</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={onClose}
              style={styles.buttonCancelStyle}
            >
              <Text style={styles.buttonCancelTitleStyle}>Cancel</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainerStyle: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  modalWindowStyle: {
    width: "80%",
    height: "50%",
    backgroundColor: "white",
    borderRadius: 10,
    padding: 20,
    borderWidth: 1,
    borderColor: "gray",
    justifyContent: "space-between",
  },
  input: {
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: 5,
    height: 40,
    paddingHorizontal: 10,
  },
  buttonsContainerStyle: {
    flexDirection: "row",
    gap: 20,
  },
  buttonAddStyle: {
    flex: 1,
    height: 40,
    width: "50%",
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: 5,
    backgroundColor: "green",
  },
  buttonAddTitleStyle: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
  buttonCancelStyle: {
    flex: 1,
    height: 40,
    width: "50%",
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: 5,
    backgroundColor: "red",
  },
  buttonCancelTitleStyle: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
});
