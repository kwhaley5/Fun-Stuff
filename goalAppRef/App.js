import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  ScrollView,
  FlatList,
} from "react-native";

import GoalItem from "./components/goalItem";
import GoalInput from "./components/goalInput";

export default function App() {
  const [goals, setGoals] = useState([]);
  const [isAddMode, setIsAddMode] = useState(false)

  const addGoalHandler = (goalTitle) => {
    setGoals((currentGoals) => [
      ...currentGoals,
      { id: Math.random().toString(), value: goalTitle },
    ]);
    setIsAddMode(false)
  };

  const removeGoalHandler = (goalKey) => {
    setGoals((currentGoals) => {
      return currentGoals.filter((goal) => goal.id !== goalKey);
    });
  };

  return (
    <View style={styles.screen}>
      <Button title="Add New Goal" onPress={() => setIsAddMode(true)} />
      <GoalInput visible={isAddMode} onAddGoal={addGoalHandler} />
      <FlatList
        data={goals}
        renderItem={(itemData) => (
          <GoalItem
            title={itemData.item.value}
            id={itemData.item.id}
            onDelete={removeGoalHandler}
          />
        )}
      /> 
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50,
  },
});
