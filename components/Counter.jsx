import React from 'react'
import { Text, Vibration, StyleSheet, Button, View } from 'react-native'

export class Counter extends React.Component {
    constructor() {
        super()
        this.state = {
            min: 0,
            sec: 0,
            paused: true,
        }
    }
    componentDidMount() {
        this.setState({
            min: this.props.limit,
            sec: 0,
        }, ()=>{console.log(this.state.min)})
    }
    componentWillUnmount() {
        clearInterval(this.interval)
    }
    /* Handler functions */
    inc = () => {
        if (this.state.sec === 0) {
            if (this.state.min === 0) {
                Vibration.vibrate([500, 500, 500])
                this.props.handleChildUnmount()
            } else {
                this.setState(prev => ({
                    min: prev.min - 1,
                    sec: 59,
                }))
            }

        } else {
            this.setState(prev => ({
                sec: prev.sec - 1
            }))
        }
    }
    handlePause = () => {
        clearInterval(this.interval);
        this.setState({
            paused: true,
        })
    }
    handleResume = ()=>{
        this.interval = setInterval(this.inc, 1000)
        this.setState({
            paused: false,
        })
    }
    handleSkip = () => {
        clearInterval(this.interval)
        this.props.handleChildUnmount()
    }
    
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.text}>{(this.state.min < 10 ? '0' : '') + this.state.min + ':' + (this.state.sec < 10 ? '0' : '') + this.state.sec}</Text>
                <View style={styles.fixToText}>
                {!this.state.paused?
                    <Button color="#58b4ae" title='PAUSE' onPress={this.handlePause} />:
                    <Button color="#58b4ae" title='PLAY' onPress={this.handleResume} />  }
                    <Button color="#58b4ae" title='SKIP' onPress={this.handleSkip} />  
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        height: 220,
        paddingHorizontal: 20,
        borderColor: '#58b4ae',
        borderWidth: 1,
    },
    text: {
        fontSize: 50,
        paddingHorizontal: 5,
        paddingBottom: 10,
        color: '#58b4ae'
    },
    fixToText: {
        
        flexDirection: 'row',
        justifyContent: 'space-between',
    }
})
