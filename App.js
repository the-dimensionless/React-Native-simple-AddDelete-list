import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View, Button, FlatList } from 'react-native';

export default function App() {

  const [userInput, setUserInput] = useState('');
  const [goals, setGoals] = useState([]);

  const userInputHandler = (input) => {
    console.log('User entered ', input);
    setUserInput({ input });
  };

  const addGoalHandler = () => {
    console.log('User entered goal as ', userInput.input);
    console.log('\nUpdating . . .\n');

    setGoals(currentGoals => [...currentGoals,
    {
      key: Math.random().toString(),
      value: userInput.input
    }]);

    // Clearing user inputhhh
    setUserInput('');
  };

  return (
    <View style={styles.screen}>
      <View style={styles.inputContainer}>
        <TextInput placeholder='Course Goal'
          style={styles.input} onChangeText={userInputHandler}
          value={userInput.input}
        />

        <Button title='Add' onPress={addGoalHandler} />
      </View>

      <FlatList
        data={goals}
        renderItem={itemData => (
          <View style={styles.listItem}>
            <Text>{itemData.item.value}</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50
  },

  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },

  input: {
    width: 200,
    borderBottomColor: 'black',
    borderWidth: 1,
    padding: 2
  },

  listItem: {
    padding: 10,
    marginVertical: 10,
    backgroundColor: 'green',
    borderColor: 'black',
    borderWidth: 1
  }
});
