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

  return (
    <View style={styles.screen}>
      <GoalInput onAddGoal={addGoalHandler} />
      <FlatList
        data={goals}
        renderItem={itemData => (
          <GoalItem title={itemData.item.value} />
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
