import React from 'react';
import { Button, View, StyleSheet } from 'react-native';
import Input from './Input'

export default class Settings extends React.Component{
    constructor(){
        super()
    }
    render (){
        const workIntervals = [
            { label: '1 min', value: '1' },
            { label: '5 min', value: '5' },
            { label: '10 min', value: '10' },
            { label: '15 min', value: '15' },
            { label: '20 min', value: '20' },
            { label: '25 min', value: '25' },
        ]
        const breakIntervals = 
        [
            { label: '1 min', value: '1' },
            { label: '2 min', value: '2' },
            { label: '5 min', value: '5' },
            { label: '10 min', value: '10' },
        ]
        const numSessions = 
        [
            { label: '1', value: '1' },
            { label: '2', value: '2' },
            { label: '4', value: '4' },
            { label: '6', value: '6' },
            { label: '10', value: '10' },
        ]
        return (
        <View>
            <Input value={this.props.workInterval+" min"} title='Work session duration' onChangeText={this.props.onChangeInterval} 
                items={workIntervals}
            />
            <Input value={this.props.break+" min"} title='Break duration' onChangeText={this.props.onChangeBreak} 
                items={breakIntervals}
            />
            <Input  value={this.props.num+""} title='Number of work sessions' onChangeText={this.props.onChangeNum} 
                items={numSessions}
            />
            <View style={styles.button}>
            <Button color="#af8baf" title='Submit' onPress={this.props.handleSubmit} />
            </View>
          </View>
        )
    }
}
const styles = StyleSheet.create({
    button: {
        marginTop: 30,
    }
  });