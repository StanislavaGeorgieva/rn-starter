import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const BoxScreen = () => {
    return (
        <View style={styles.parentStyle}>
            <View style={styles.viewStyleOne}>
                <Text>Child 1</Text>
            </View>
            <View style={styles.viewStyleTwo}>
                <Text>Child 2</Text>
            </View>
            <View style={styles.viewStyleThree}>
                <Text>Child 3</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    parentStyle: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        flexDirection: 'row',
        height: 100,

    },
    viewStyleOne: {
        height: 100,
        width: 100,
        backgroundColor: 'red',
    },
    viewStyleTwo: {
        height: 100,
        width: 100,
        backgroundColor: 'green',
        alignSelf: 'flex-end',
    },
    viewStyleThree: {
        height: 100,
        width: 100,
        position: 'absolute',
        top: 100,
        left: '50%',
        marginLeft: -50,
        backgroundColor: 'purple',
    },
})

export default BoxScreen
