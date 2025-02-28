import React from 'react'
import { useState } from 'react'
import { View, Text, StyleSheet, Button } from 'react-native'

const CounterScreen = () => {

    const [counter, setCounter] = useState(0);
    return (
        <View>
            <Button title='Increase' onPress={() => {
                setCounter(counter + 1);

            }} />
            <Button title='Decrease' onPress={() => {
                setCounter(counter - 1);
            }} />
            <Text>Current Count: {counter}</Text>
        </View>
    )
}
const styles = StyleSheet.create({});
export default CounterScreen

/* import React, { useReducer } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const reducer = (state, action) => {
    switch (action.type) {
        case 'increase':
            return { ...state, counter: state.counter + 1 };
        case 'decrease':
            return { ...state, counter: state.counter - 1 };
        default:
            return state;
    }
};

const CounterScreen = () => {
    const [state, dispatch] = useReducer(reducer, { counter: 0 });

    return (
        <View>
            <Button title='Increase' onPress={() => dispatch({ type: 'increase' })} />
            <Button title='Decrease' onPress={() => dispatch({ type: 'decrease' })} />
            <Text>Current Count: {state.counter}</Text>
        </View>
    );
};

const styles = StyleSheet.create({});

export default CounterScreen; */

