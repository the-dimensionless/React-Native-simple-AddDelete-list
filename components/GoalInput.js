import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';

const GoalInput = (props) => {
    const [userInput, setUserInput] = useState('');

    const userInputHandler = (input) => {
        console.log('User entered ', input);
        setUserInput({ input });
    };

    return (
        <View style={styles.inputContainer}>
            <TextInput placeholder='Course Goal'
                style={styles.input} onChangeText={userInputHandler}
                value={userInput.input}
            />
            <Button title='Add' onPress={props.onAddGoal.bind(this, userInput.input, setUserInput)} />
        </View>
    );
};

const styles = StyleSheet.create({
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
});

export default GoalInput;