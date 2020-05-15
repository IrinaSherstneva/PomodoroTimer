import React from 'react';
import { TouchableHighlight, View, Text, StyleSheet } from 'react-native';

export default function MyButton(props) {
    return (
        <TouchableHighlight onPress={props.handlePress}>
            {/* <View style={styles.button}> */}
                {/* <Text>{props.icon}</Text> */}
                <Text style={styles.text}>{props.title}</Text>
            {/* </View> */}
        </TouchableHighlight>
    )
}

const styles = StyleSheet.create({
    button: {
        margin: 10,
        alignItems: "center",
        backgroundColor: "#DDDDDD",
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        padding: 1,
        // borderWidth: 1
    },
    text: {
        margin: 10,
    }
})