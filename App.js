import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View, Button, FlatList } from 'react-native';

import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App() {

  const [goals, setGoals] = useState([]);

  const addGoalHandler = (goalTitle, callbackClearInput) => {
    console.log('User entered goal as ', goalTitle);
    console.log('\nUpdating . . .\n');

    setGoals(currentGoals => [...currentGoals,
    {
      key: Math.random().toString(),
      value: goalTitle
    }]);

    // Clearing user input
    //setUserInput('');
    callbackClearInput('');
  };

  /*

  */
  const removeGoalHandler = goalId => {
    setGoals(currentGoals => {
      // JS filter return true to keep value in array
      // return false to delete
      console.log('received id is ', goalId);
      const newValue = currentGoals.filter((goal) => goal.key !== goalId);
      console.log(newValue);
      return newValue;
    });
  }

  return (
    <View style={styles.screen}>
      <GoalInput onAddGoal={addGoalHandler} />
      <FlatList
        keyExtractor={(item, index) => item.key}
        data={goals}
        renderItem={itemData => (
          <GoalItem
            title={itemData.item.value}
            onDelete={removeGoalHandler}
            id={itemData.item.key}
          />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50
  },
});
