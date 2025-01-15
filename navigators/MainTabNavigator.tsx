/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';

import {
  SafeAreaView,
  Text,
} from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import SearchScreen from '../screens/SearchScreen';
import WriteDiaryScreen from '../screens/WriteDiaryScreen';
import ChatScreen from '../screens/ChatScreen';
import MyInfoScreen from '../screens/MyInfoScreen';

type mainTabParamList = {
    Home : undefined,
    Search : undefined,
    Write : undefined,
    Chat : undefined,
    MyInfo : undefined
  };

const BottomTab = createBottomTabNavigator<mainTabParamList>();

function MainTabNavigator(): React.JSX.Element {

  return (
      <BottomTab.Navigator>
        <BottomTab.Screen name="Home" component={HomeScreen}></BottomTab.Screen>
        <BottomTab.Screen name="Search" component={SearchScreen}></BottomTab.Screen>
        <BottomTab.Screen name="Write" component={WriteDiaryScreen}></BottomTab.Screen>
        <BottomTab.Screen name="Chat" component={ChatScreen}></BottomTab.Screen>
        <BottomTab.Screen name="MyInfo" component={MyInfoScreen}></BottomTab.Screen>
      </BottomTab.Navigator>
  );
}

export default MainTabNavigator;
