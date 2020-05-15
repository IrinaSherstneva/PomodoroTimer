import React from 'react';
import { StyleSheet, Button, View } from 'react-native';
import { Counter } from './components/Counter'
import Input from './components/Input'

export default class App extends React.Component {
  constructor() {
    super()
    this.state = {
      renderCounter: false,
      renderSettings: true,
      workInterval: 25,
      break: 5,
      isNowWork: true,
    }
  }
  handleChildUnmount = () => {
    this.setState({renderCounter: false})
    this.switch()
  }
  switch = () => {
    this.setState(prev => ({ isNowWork: !prev.isNowWork }))
    setTimeout(
      function () {
        this.setState({renderCounter: true})
        }.bind(this),
        0)
        console.log(this.state.renderCounter)
  }
  onChangeInterval = (input) => {
    this.setState({ workInterval: input })
  }
  onChangeBreak = (input) => {
    this.setState({ break: input })
  }
  handlePress = () => {
    this.setState({ renderSettings: false });
    this.setState({ renderCounter: true });
  }
  render() {
    return (
      <View style={styles.container}>
        {this.state.renderCounter &&
          <Counter limit={this.state.isNowWork ? this.state.workInterval : this.state.break} handleChildUnmount={this.handleChildUnmount} />}
        {this.state.renderSettings &&
          <View style={styles.settings}>
            <Input value={this.state.workInterval} title='Working interval' onChangeText={this.onChangeInterval} />
            <Input value={this.state.break} title='Break' onChangeText={this.onChangeBreak} />
            <Button color="#58b4ae" title='Submit' onPress={this.handlePress} />
          </View>}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
    backgroundColor: 'rgba(241, 235, 187,0.5)',
    justifyContent: 'center',
    
  },
  settings: {
    height: 220,
        paddingHorizontal: 20,
        borderColor: '#58b4ae',
        borderWidth: 1,
        justifyContent: 'space-evenly'
  }
});
