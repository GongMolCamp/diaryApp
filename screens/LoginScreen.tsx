/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import AsyncStorage from '@react-native-async-storage/async-storage';
import React from 'react';
import {
  Button,
  SafeAreaView,
  Text,
  View,
} from 'react-native';

async function loginDemo() {
  try {
    const response = await fetch("http://localhost:80/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username: "test", password: "password", groupid: "testgroup" }),
    });

    const data = await response.json();

    if (data.success) {
      // JWT 저장
      await AsyncStorage.setItem("token", data.token);
      console.log("login success & token saved");
    } else {
      console.log("login fail");
    }
  } catch (error) {
    console.error("Error during login:", error);
  }
}


const LoginScreen: React.FC<{ route: any, navigation: any }> = ({ route, navigation }) => {
  loginDemo();
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