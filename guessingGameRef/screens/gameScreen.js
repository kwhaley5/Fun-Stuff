import React, { useState, useRef, useEffect } from 'react'
import { View, Text, StyleSheet, Button } from 'react-native'

import Card from '../components/card'

const generateNumber = (min, max, exclude) => {
    min = Math.ceil(min)
    max = Math.floor(max)

    const randNumber = Math.floor(Math.random() * (max-min)) + min
    if(randNumber === exclude) {
        return generateNumber(min, max, exclude)
    } else {
        return randNumber
    }
}

const GameScreen = props => {

    const [guess, setGuess] = useState(generateNumber(1, 100, props.userChoice))
    const [rounds, setRounds] = useState(0)

    const currentLow = useRef(1)
    const currentHigh = useRef(100)

    const { userChoice, onGameOver } = props

    useEffect(() => {
        if(guess === userChoice) {
            onGameOver(rounds)
        }
    }, [guess, userChoice, onGameOver])

    const newNumber = direction => {
        if(direction === 'lower') {
            currentHigh.current = guess;
        } else {
            currentLow.current = guess;
        }

        const nextGuess = generateNumber(currentLow.current, currentHigh.current, guess)
        setRounds(curRounds => curRounds + 1)
        setGuess(nextGuess)
    }

    return (
      <View style={styles.screen}>
        <Text>Computer Guess:</Text>
        <Text>{guess}</Text>
        <Card>
          <Button title="Lower" onPress={newNumber.bind(this, "lower")} />
          <Button title="Higher" onPress={newNumber.bind(this, "higher")} />
        </Card>
      </View>
    );
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 10,
        alignItems: 'center'
    }
})

export default GameScreen