import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';

export default function Input(props) {
    return (
        <View>
            <Text style={styles.text}> {props.title}</Text>
            <View>
            <RNPickerSelect  selectedValue={props.value} style={styles.textInput} 
            onValueChange={input => props.onChangeText(input)}
            items={props.items} />
            </View>
        </View>
    )
}

const styles=StyleSheet.create({
    text: {
        fontSize: 22,
        color: '#63b7af',
        fontFamily: 'sans-serif-medium'
    }
})