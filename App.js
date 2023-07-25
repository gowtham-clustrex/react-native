
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import login from './src/screens/login';
import home from './src/screens/Home';
// import SWITCH from './src/screens/switch';
//import CustomSwitch from './CustomSwitch';
import OTPVerification from './src/screens/OTPVerification';
//import phoneinput from './src/screens/phoneinput';
import signup from './src/screens/signup';
import gender from './src/screens/gender';

export default function App()
{
  const Stack = createStackNavigator();

return(
  <NavigationContainer>
      <Stack.Navigator initialRouteName="gender">
        <Stack.Screen name="home" component={home}  options={{ headerShown: false }}/>
        <Stack.Screen name="login" component={login}  options={{ headerShown: false }}/> 
        <Stack.Screen name="OTPVerification" component={OTPVerification}  options={{ headerShown: false }}/> 
        <Stack.Screen name="signup" component={signup}  options={{ headerShown: false }}/> 
        <Stack.Screen name="gender" component={gender}  options={{ headerShown: false }}/> 


        
         {/* <Stack.Screen name="phoneinput" component={phoneinput}  options={{ headerShown: false }}/>  */}

      </Stack.Navigator>
    </NavigationContainer>
  );
  };



