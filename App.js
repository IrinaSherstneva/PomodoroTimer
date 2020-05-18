import React from 'react';
import { StyleSheet, View } from 'react-native'
import Constants from 'expo-constants'
import { Counter } from './components/Counter'
import Settings from './components/Settings'
import Done from './components/Done'
import { LinearGradient } from 'expo-linear-gradient';
import { Dimensions } from 'react-native'

export default class App extends React.Component {
  constructor() {
    super()
    this.state = {
      renderCounter: false,
      renderSettings: true,
      workInterval: 25,
      break: 5,
      num: 10,
      isNowWork: true,
      done: false,
    }
  }

  // Titles
  titleWork = 'Work session'
  titleBreak = 'Break'

  //Handler Functions
  handleChildUnmount = () => {
    this.setState({ renderCounter: false })
    this.switch()
  }
  switch = () => {
    if (this.state.num - 1 > 0) {
      this.setState(prev => ({ isNowWork: !prev.isNowWork }))
      setTimeout(
        function () {
          this.setState({ renderCounter: true })
        }.bind(this),
        0)
      if (!this.state.isNowWork) {
        this.setState(prev => ({
          num: prev.num - 1
        }))
      }
    } else {
      this.setState({
        done: true
      })
    }
  }
  onChangeInterval = (input) => {
    this.setState({ workInterval: input })
  }
  onChangeBreak = (input) => {
    this.setState({ break: input })
  }
  onChangeNum = (input) => {
    this.setState({ num: input })
  }
  handleSubmit = () => {
    this.setState({ renderSettings: false });
    this.setState({ renderCounter: true });
  }

  windowHeight = Dimensions.get('window').height

  render() {
    return (
      <View style={styles.container}>
        <LinearGradient
          colors={['rgba(238,174,202,0.8)', '#def4f0']}
          style={{
            position: 'absolute',
            left: 0,
            right: 0,
            top: 0,
            height: this.windowHeight,
          }}
        />
        {this.state.renderCounter &&
          <Counter title={this.state.isNowWork ? this.titleWork : this.titleBreak} 
          limit={this.state.isNowWork ? this.state.workInterval : this.state.break} 
          handleChildUnmount={this.handleChildUnmount} />}
        {this.state.renderSettings &&
          <Settings num={this.state.num} workInterval={this.state.workInterval} break={this.state.break} 
          onChangeNum={this.onChangeNum} onChangeInterval={this.onChangeInterval} onChangeBreak={this.onChangeBreak} 
          handleSubmit={this.handleSubmit} />}
        {this.state.done &&
          <Done />}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
    marginTop: Constants.statusBarHeight + 4,
    justifyContent: 'center',
  },
});
