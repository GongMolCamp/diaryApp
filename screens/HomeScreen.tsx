/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  Button,
  SafeAreaView,
  Text,
  View,
} from 'react-native';

const HomeScreen: React.FC<{ route: any, navigation: any }> = ({ route, navigation }) => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Button title='toDetail' onPress={() => navigation.navigate("Detail")}></Button>
    </View>
  );
};

export default HomeScreen;