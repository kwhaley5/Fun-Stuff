import React, { useState } from 'react'
import {View, Text, StyleSheet, Button, TextInput, Alert} from 'react-native'

import Card from '../components/card'

const StartGamesScreen = props => {

    const [enteredValue, setEnteredValue] = useState('')
    const [confirmed, setConfirmed] = useState(false)
    const [selectedNumber, setSelectedNumber] = useState()

    const numberInputHandler = inputText => {
        setEnteredValue(inputText.replace(/[^0-9]/g, ''))
    }

    const resetInputHandler = () => {
        setEnteredValue('')
        setConfirmed(false);
    }

    const confirmInputHandler = () => {
        const chosenNumber = parseInt(enteredValue)
        if(chosenNumber > 99) {
            Alert.alert('Invalid Number!', 'Please select something lower than 99', [{text: 'Okay', style: 'destructive', onPress: resetInputHandler}])
        }
        setConfirmed(true)
        setEnteredValue("");
        setSelectedNumber(parseInt(enteredValue))
    }

    let confirmedOutput;

    if(confirmed) {
        confirmedOutput = (
          <View>
            <Text>Chosen number: {selectedNumber}</Text>
            <Button
              title="Start Game"
              onPress={() => props.onStartGame(selectedNumber)}
            />
          </View>
        );
    }

    return (
      <View style={styles.screen}>
        <Text style={styles.title}>Game Start:</Text>
        <Card style={styles.gameBox}>
          <Text>Pick a Number</Text>
          <TextInput
            style={styles.textInput}
            keyboardType="number-pad"
            onChangeText={numberInputHandler}
            value={enteredValue}
          />
          <View style={styles.buttonContainer}>
            <View style={styles.buttonStyle}>
              <Button title="Confirm" onPress={confirmInputHandler} />
            </View>
            <View style={styles.buttonStyle}>
              <Button title="Reset" onPress={resetInputHandler} color="red" />
            </View>
          </View>
        </Card>
        {confirmedOutput}
      </View>
    );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 10,
    alignItems: "center",
  },

  buttonContainer: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    paddingHorizontal: 10,
    paddingTop: 10,
  },

  title: {
    fontSize: 18,
    paddingBottom: 30,
  },

  textInput: {
    borderWidth: 1,
    padding: 10,
    width: "75%",
    textAlign: 'center'
  },

  gameBox: {
    width: 300,
    maxWidth: "80%",
    alignItems: "center",
  },

  buttonStyle: {
    width: '35%'
  }
});

export default StartGamesScreen