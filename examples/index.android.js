import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import Switch from 'react-native-material-switch';

export default class examples extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>{'Material Switch'}</Text>
        <View style={styles.block}>
          <Text style={styles.blockText}>{'Default'}</Text>
          <Switch/>
        </View>
        <View style={styles.block}>
          <Text style={styles.blockText}>{'Custom colors'}</Text>
            <Switch
              activeBackgroundColor='rgba(206, 182, 255, 0.74)'
              inactiveBackgroundColor='rgba(252, 16, 148, 0.62)'
              activeButtonColor='#6d3abf'
              activeButtonPressedColor='#7943d1'
              inactiveButtonColor='#ba2a8f'
              inactiveButtonPressedColor='#cf39a2'
              />
        </View>
        <View style={styles.block}>
          <Text style={styles.blockText}>{'With callbacks'}</Text>
            <Switch
              onActivate={() => {alert('activate')}}
              onDeactivate={() => {alert('deactivate')}}
              onChangeState={(state) => alert('change state '+ state)}
              />
        </View>
        <View style={styles.block}>
          <Text style={styles.blockText}>{'Custom sizes'}</Text>
            <Switch
              style={{marginBottom:10}}
              buttonRadius={8}
              switchHeight={10}
              switchWidth={100}
              />
            <Switch
              buttonRadius={14}
              switchHeight={29}
              switchWidth={50}
              />
        </View>
        <View style={styles.block}>
          <Text style={styles.blockText}>{'Disabled swipe'}</Text>
            <Switch enableSlide={false}/>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#bdebff',
  },
  block: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 15,
  },
  blockText: {
    marginBottom: 10,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 20
  }
});

AppRegistry.registerComponent('examples', () => examples);
