import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Done() {
    return (
        <View>
        <Text style={styles.text}>Well done for today!</Text>
        </View>
    )
}
const styles=StyleSheet.create({
    text: {
        fontSize: 45,
        fontFamily: 'sans-serif-medium',
        color: '#af8baf',
        textAlign: 'center'
    }
})