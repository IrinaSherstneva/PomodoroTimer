import React from 'react'
import { Text, Vibration, StyleSheet, View } from 'react-native'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faStepForward, faPause, faPlay } from '@fortawesome/free-solid-svg-icons'
import MyButton from './MyButton'



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
        })
    }
    componentWillUnmount() {
        clearInterval(this.interval)
    }

    /* Handler functions */
    decrease = () => {
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
    handlePlay = () => {
        this.interval = setInterval(this.decrease, 1000)
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
            <Text style={styles.title}>{this.props.title}</Text>
                <View style={styles.count}>
                    <Text style={styles.text}>{(this.state.min < 10 ? '0' : '') + this.state.min + ':' + (this.state.sec < 10 ? '0' : '') + this.state.sec}</Text>
                </View>
                <View>
                    {!this.state.paused ?
                        <MyButton title='PAUSE' onPress={this.handlePause}
                            icon={<FontAwesomeIcon icon={faPause} size={14} style={styles.icon} />}
                        /> :
                        <MyButton title='PLAY' onPress={this.handlePlay}
                            icon={<FontAwesomeIcon icon={faPlay} size={14} style={styles.icon} />}
                        />}

                    <MyButton title='SKIP' onPress={this.handleSkip}
                        icon={<FontAwesomeIcon icon={faStepForward} size={14} style={styles.icon} />}
                    />

                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
    },
    count: {
        height: 250,
        width: 250,
        borderRadius: 250,
        borderColor: '#58b4ae',
        borderWidth: 4,
        borderStyle: 'dotted',
        alignItems: 'center',
        justifyContent: 'center',
        fontFamily: 'sans-serif-medium',
        marginBottom: 30,
        marginTop: 50,
    },
    icon: {
        color: '#eeaeca',
        marginHorizontal: 20,
        marginVertical: 10,
    },
    text: {
        fontSize: 65,
        paddingHorizontal: 5,
        paddingBottom: 10,
        color: '#58b4ae',
        fontFamily: 'sans-serif-medium'
    },
    title: {
        fontSize: 40,
        color: '#58b4ae',
        textAlign: 'center'
    }
})
