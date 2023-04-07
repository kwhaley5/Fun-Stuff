import React, { useState } from 'react'
import { View, Button, StyleSheet, TextInput, Modal } from 'react-native'

const GoalInput = props => {

    const [enteredGoal, setEnteredGoal] = useState("");

    const goalInputHandler = (enteredText) => {
      setEnteredGoal(enteredText);
    };

    return (
      <Modal visible={props.visible} animationType='slide'>
        <View style={styles.inputContainer}>
          <TextInput
            placeholder="Goal"
            style={styles.input}
            onChangeText={goalInputHandler}
            value={enteredGoal}
          />
          <Button
            title="add"
            onPress={props.onAddGoal.bind(this, enteredGoal)}
          />
        </View>
      </Modal>
    );
}

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  input: {
    borderColor: "black",
    borderWidth: 1,
    padding: 10,
    width: "80%",
    marginBottom: 20,
  },
});

export default GoalInput