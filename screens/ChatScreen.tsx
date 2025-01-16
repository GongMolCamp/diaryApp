/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useContext, useEffect } from "react";
import {
  FlatList,
  Pressable,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from "react-native";

import { GlobalContext } from "../contexts/index";
//import Chatcomponent from "../components/Chatcomponent";
import { socket } from "../utils";

const ChatScreen: React.FC<{ route: any, navigation: any }> = ({ route, navigation }) => {
  
  const context = useContext(GlobalContext);

  if (!context) {
    throw new Error("GlobalContext is not provided.");
  }

  const {
    currentUser,
    allChatRooms,
    setAllChatRooms,
    setCurrentUser,
  } = context;
  
  useEffect(() => {
    socket.emit("getGroup", {
      userId : 'testid'
    });

    socket.on("groupList", (groups : any) => {
      console.log(groups ,'hhhhhhhhhhhhhhhhhhhhhhh');
      setAllChatRooms(groups);
    });
  }, [socket]);


  useEffect(() => {
    if (currentUser.trim() === "") navigation.navigate("Homescreen");
  }, [currentUser]);

  return (
    <View style={styles.mainWrapper}>
      <View style={styles.topContainer}>
        <View style={styles.header}>
          <Text style={styles.heading}>Welcome {currentUser}!</Text>
        </View>
      </View>
      <View style={styles.listContainer}>
        {allChatRooms && allChatRooms.length > 0 ? (
          <FlatList
            data={allChatRooms}
            renderItem={({ item }) => <Text>채팅창</Text>}
            keyExtractor={(item) => JSON.stringify(item)}
          />
        ) : null}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  mainWrapper: {
    backgroundColor: "#eee",
    flex: 1,
  },
  topContainer: {
    backgroundColor: "#fff",
    height: 70,
    width: "100%",
    padding: 20,
    justifyContent: "center",
    marginBottom: 15,
    flex: 0.3,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  heading: {
    fontSize: 30,
    fontWeight: "bold",
    textDecorationLine: "underline",
  },
  listContainer: {
    flex: 3.4,
    paddingHorizontal: 10,
  },
  bottomContainer: {
    flex: 0.3,
    padding: 10,
  },
  button: {
    backgroundColor: "#703efe",
    padding: 12,
    width: "100%",
    elevation: 1,
    borderRadius: 50,
  },
  buttonText: {
    textAlign: "center",
    color: "#fff",
    fontWeight: "bold",
    fontSize: 20,
  },
});

export default ChatScreen;