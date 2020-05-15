import React from 'react';
import { Text, TextInput, View, StyleSheet } from 'react-native';

export default function Input(props) {
    return (
        <View style={styles.container}>
            <Text style={styles.text}> {props.title}</Text>
            <View style={styles.container}>
            <TextInput placeholder={props.value+""} style={styles.textInput} onChangeText={input => props.onChangeText(input)} />
            <Text style={styles.text}>min</Text>
            </View>
        </View>
    )
}

const styles=StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 0,
        alignItems: 'baseline'
    },
    text: {
        fontSize: 20,
        color: '#58b4ae',
        
    },
    textInput: {
        width: 30,
        margin: 10,
        borderColor: 'gray', 
        borderWidth: 1 
    }
})