import React, { useState } from "react";
import { StyleSheet, View, Text } from "react-native";
import Header from "../components/Header";
import GameOverScreen from "./GameOverScreen";
import GameScreen from "./GameScreen";
import StartGameScreen from "./StartGameScreen";

const Lab4 = () => {
  const [correctNumber, setCorrectNumber] = useState(0);
  const [guessRounds, setGuessRounds] = useState(0);

  // ฟังก์ชันสำหรับการเริ่มเกมใหม่
  const configureNewGameHandler = () => {
    setGuessRounds(0)
    setCorrectNumber(0)
  };

  const startGameHandler = (rndNum) => {
    setCorrectNumber(rndNum);
  };
 
  // ฟังก์ชันสำหรับจัดการการจบเกม
  const gameOverHandler = (numOfRounds) => {
    setGuessRounds(numOfRounds);
  };

  let content = <StartGameScreen onStartGame={startGameHandler} />;

  if (correctNumber > 0 && guessRounds <= 0) {
    // ทำการเรียก GameScreen
    content = (
      <GameScreen answer = {correctNumber} onGameOver={gameOverHandler} />
    );
  } else if (guessRounds > 0) {
    // ทำการเรียก GameOverScreen
    content = (
      <GameOverScreen rounds ={guessRounds} answer = {correctNumber} onStartGame={configureNewGameHandler}/>
    );
  }

  return (
    <View style={styles.screen}>
      <Header title="Guess a Number" />
      {content}
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
});
export {Lab4}