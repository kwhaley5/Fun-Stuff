import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'

const GoalItem = props => {
    return (
      <TouchableOpacity onPress={props.onDelete.bind(this, props.id)}>
        <View style={styles.goal}>
          <Text>{props.title}</Text>
        </View>
      </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
  goal: {
    margin: 5,
    padding: 10,
    backgroundColor: "#B0B0B0",
    borderColor: "black",
    borderWidth: 1,
  },
});

export default GoalItem;