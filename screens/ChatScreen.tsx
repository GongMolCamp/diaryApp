/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useContext, useEffect, useState } from "react";
import {
  FlatList,
  Pressable,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from "react-native";

import { GlobalContext } from "../contexts/index2";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { io, Socket } from "socket.io-client";
//import Chatcomponent from "../components/Chatcomponent";
//import { socket } from "../utils";

interface chatRoomProp {
  couple_img: string;
  couple_user_name: string;
  group_id: string;
  message_date: string;
  message_write_id: string;
  message_text: string;
  message_read: string;
}

const ChatScreen: React.FC<{ route: any, navigation: any }> = ({ route, navigation }) => {

  const context = useContext(GlobalContext);

  if (!context) {
    throw new Error("GlobalContext is not provided.");
  }

  const [chatRoom, setChatRoom] = useState<chatRoomProp>({
    couple_img: "",
    couple_user_name: "",
    group_id: "",
    message_date: "",
    message_write_id: "",
    message_text: "",
    message_read: "",
  });

  const [socket, setSocket] = React.useState<Socket | null>(null);

  useEffect(() => {
    const connectSocket = async () => {
      const token = await AsyncStorage.getItem("token");

      if (token) {
        const newSocket = io("http://localhost:80", {
          auth: { token }, // JWT 전달
        });

        newSocket.on("connect", () => {
          console.log("Connected to server");
        });

        setSocket(newSocket);
      } else {
        console.log("No token found. Please log in.");
      }
    };

    connectSocket();

  }, []);

  useEffect(() => {
    if (socket) {
      socket.emit("getGroup", {
        groupid: "testgroup",
      });

      socket.on("sendGroup", (groups) => {
        console.log(groups);
        setChatRoom(groups);
      });
    }
  }, [socket]);

  /*
  useEffect(() => {
    if (currentUser.trim() === "") navigation.navigate("Homescreen");
  }, [currentUser]);
  */

  return (
    <View style={styles.mainWrapper}>
      <View style={styles.listContainer}>
        <Text>{chatRoom.group_id !== "" ? chatRoom.couple_user_name : ""}
        </Text>
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