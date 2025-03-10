import React, { useReducer } from 'react'
import { View, StyleSheet } from 'react-native'
import ColorCounter from '../components/ColorCounter'

const COLOR_INCREMENT = 15;

const SquareScreen = () => {

    const reducer = (state, action) => {
        // state === { red: number, green: number, blue: number };
        // action === { colorToChange: 'red' || 'green' || 'blue', amount: 15 || -15 }
        switch (action.colorToChange) {
            case 'red':
                return { ...state, red: state.red + action.amount };
            case 'green':
                return { ...state, green: state.green + action.amount };
            case 'blue':
                return { ...state, blue: state.blue + action.amount };
            default:
                return state;
        }
    }

    const [{ red, green, blue }, runMyReducer] = useReducer(reducer, { red: 0, green: 0, blue: 0 });



    return (
        <View style={styles.container}>
            <ColorCounter
                onIncrease={() => runMyReducer({ colorToChange: 'red', amount: COLOR_INCREMENT })}
                onDecrease={() => runMyReducer({ colorToChange: 'red', amount: -1 * COLOR_INCREMENT })}
                color="Red"
            />
            <ColorCounter
                onIncrease={() => runMyReducer({ colorToChange: 'green', amount: COLOR_INCREMENT })}
                onDecrease={() => runMyReducer({ colorToChange: 'green', amount: -1 * COLOR_INCREMENT })}
                color="Green" />
            <ColorCounter
                onIncrease={() => runMyReducer({ colorToChange: 'blue', amount: COLOR_INCREMENT })}
                onDecrease={() => runMyReducer({ colorToChange: 'blue', amount: -1 * COLOR_INCREMENT })}
                color="Blue" />
            <View
                style={{ height: 150, width: 150, backgroundColor: `rgb(${red},${green},${blue})` }} />
        </View>
    )
}

const styles = StyleSheet.create({})

export default SquareScreen
