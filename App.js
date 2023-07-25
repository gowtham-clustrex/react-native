import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import login from './src/screens/login';
import home from './src/screens/Home';
// import SWITCH from './src/screens/switch';
//import CustomSwitch from './CustomSwitch';
import OTPVerification from './src/screens/OTPVerification';
import Phoneinput from './src/screens/phoneinput';

export default function App() {
  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="home">
        <Stack.Screen
          name="home"
          component={home}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="login"
          component={login}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="OTPVerification"
          component={OTPVerification}
          options={{headerShown: false}}
        />

        <Stack.Screen
          name="phoneinput"
          component={Phoneinput}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
