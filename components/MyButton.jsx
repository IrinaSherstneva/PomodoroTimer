import React from 'react'
import { View, StyleSheet } from 'react-native'
import { Button } from 'react-native-elements'

export default function MyButton(props) {
    return (
        <View>
        <Button buttonStyle={styles.button} onPress={props.onPress} title={props.title} icon={props.icon} />
        </View>
    )
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: '#af8baf',
        padding: 15,
        marginVertical: 12,
    }
})