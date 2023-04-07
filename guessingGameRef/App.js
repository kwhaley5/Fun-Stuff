import React, { useState } from 'react'
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import Header from './components/header';
import StartGamesScreen from './screens/startGameScreen';
import GameScreen from './screens/gameScreen';
import WinnerScreen from './screens/winnerScreen';

export default function App() {

  const [userNumber, setUserNumber] = useState()
  const [rounds, setRounds] = useState(0)

  const startGameHandler = (selectedNumber) => {
    setUserNumber(selectedNumber)
    setRounds(0)
  }

  const gameOverHandler = (numOfRounds) => {
    setRounds(numOfRounds)
  }

  const newGameHandler = () => {
    setRounds(0)
    setUserNumber(null)
  }

  let content = <StartGamesScreen onStartGame={startGameHandler} />

  if(userNumber && rounds <= 0) {
    content = <GameScreen userChoice={userNumber} onGameOver={gameOverHandler} />
  } else if(rounds > 0) {
    content = <WinnerScreen roundNumber={rounds} newGame={newGameHandler}/>
  }

  return (
    <View style={styles.screen}>
      <Header title="Guess a Number"/>
      {content}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  }
});
