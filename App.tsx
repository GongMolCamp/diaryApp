/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useEffect } from 'react';
import {
  SafeAreaView,
  Text,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './screens/LoginScreen';
import MainTabNavigator from './navigators/MainTabNavigator';
import DetailScreen from './screens/DiaryDetail';
import SignUpScreen from './screens/SignUpScreen';
import GlobalState from './contexts/index2';
import AsyncStorage from '@react-native-async-storage/async-storage';

type RootStackParamList = {
  Login: undefined,
  Main: undefined,
  Detail: undefined,
  SignUp: undefined
};

const Stack = createStackNavigator<RootStackParamList>();

function App(): React.JSX.Element {

  

  return (
    <GlobalState>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Login">
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="SignUp" component={SignUpScreen} />
          <Stack.Screen name="Main" component={MainTabNavigator} />
          <Stack.Screen name="Detail" component={DetailScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </GlobalState>
  );
}

export default App;
