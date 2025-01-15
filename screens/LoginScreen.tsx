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

const LoginScreen: React.FC<{ route: any, navigation: any }> = ({ route, navigation }) => {
  
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Button title='회원 가입' onPress={() => navigation.navigate("SignUp")}></Button>
      <Button title='로그인' onPress={() => navigation.reset({
          index: 0, 
          routes: [{ name: 'Main' }], 
        })}></Button>
    </View>
  );
};

export default LoginScreen;