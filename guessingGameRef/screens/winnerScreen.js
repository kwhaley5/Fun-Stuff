import React from 'react'
import { View, Text, Button } from 'react-native'

const WinnerScreen = props => {

        return(
            <View>
                <Text>You Won!</Text>
                <Text>Number of Rounds {props.roundNumber} </Text>
                <Button title="Play Again?" onPress={props.newGame}/>
            </View>
        )
}

export default WinnerScreen