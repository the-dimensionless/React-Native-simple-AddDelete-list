import React, { useState } from 'react';
import { StyleSheet, View, Button, FlatList } from 'react-native';

import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App() {

  const [goals, setGoals] = useState([]);
  const [isAddMode, setIsAddMode] = useState(false);

  const addGoalHandler = (goalTitle, callbackClearInput) => {
    console.log('User entered goal as ', goalTitle);
    setGoals(currentGoals => [...currentGoals,
    {
      key: Math.random().toString(),
      value: goalTitle
    }]);
    // Clearing user input or setUserInput('');
    callbackClearInput('');
    setIsAddMode(false);
  };

  /*
     JS filter return true to keep value in array, return false to delete
  */
  const removeGoalHandler = goalId => {
    setGoals(currentGoals => {
      return currentGoals.filter((goal) => goal.key !== goalId);;
    });
  }

  const cancelInputModal = () => {
    setIsAddMode(false);
  }

  return (
    <View style={styles.screen}>
      <Button title='Add new Goal' onPress={() => setIsAddMode(true)} />
      <GoalInput visible={isAddMode} onAddGoal={addGoalHandler} cancel={cancelInputModal} />
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
