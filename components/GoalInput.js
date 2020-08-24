import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Modal } from 'react-native';

const GoalInput = (props) => {
    const [userInput, setUserInput] = useState('');

    const userInputHandler = (input) => {
        // console.log('User entered ', input);
        setUserInput({ input });
    };

    return (
        <Modal visible={props.visible} animationType='slide'>
            <View style={styles.inputContainer}>
                <TextInput placeholder='Course Goal'
                    style={styles.input} onChangeText={userInputHandler}
                    value={userInput.input}
                />
                <View style={styles.buttonContainer}>
                    <View style={styles.button}>
                        <Button title='Add' onPress={props.onAddGoal.bind(this, userInput.input, setUserInput)} />
                    </View>
                    <View style={styles.button}>
                        <Button title='Cancel' color='red' onPress={props.cancel} />
                    </View>
                </View>
            </View>
        </Modal>
    );
};

const styles = StyleSheet.create({
    inputContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },

    input: {
        width: 300,
        borderBottomColor: 'black',
        borderWidth: 1,
        padding: 2,
        marginBottom: 10
    },

    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '60%'
    },

    button: {
        width: '40%'
    }
});

export default GoalInput;