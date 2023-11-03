/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { Users } from './src/components/Users';
// import Login from './src/components/Login';
// import { CounterWithHook } from './src/components/CounterWithHook';
// import { Counter } from './src/components/Counter';
// import Basictypes from './src/typescript/Basictypes';
// import LiteralObjects from './src/typescript/LiteralObjects';
// import { Functions } from './src/typescript/Functions';

function App(): JSX.Element {

  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 24, fontWeight: '900', color: 'black' }}>
        Introduccion a TS
      </Text>
      {/* <Basictypes /> */}
      {/* <LiteralObjects /> */}
      {/* <Functions /> */}
      {/* <Counter /> */}
      {/* <CounterWithHook /> */}
      {/* <Login /> */}
      <Users />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff'
  },
});

export default App;
