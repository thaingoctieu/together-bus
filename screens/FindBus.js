import React, {
  useState,
  useEffect,
  useContext,
  ScreenWitdh,
  ScreenHeight,
} from "react";
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TouchableOpacity,
  FlatList
} from "react-native";

import { Octicons, MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { Search, BusInfo } from "../components";

export default function FindBus() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <ImageBackground
          source={require("../assets/header.png")}
          style={styles.img}
        >
          <View
            style={{
              flexDirection: "row",
              paddingTop: 50,
              alignItems: "center",
              paddingBottom: 25,
            }}
          >
            <Octicons
              style={{ paddingLeft: 20 }}
              name="arrow-left"
              size={35}
              color="white"
              onPress={() => navigation.pop()}
            />
            <Text style={styles.title}>Chọn tuyết xe</Text>
          </View>
          <Search />
          <View
            style={{
              paddingVertical: 20,
              flexDirection: "row",
              //   justifyContent: "space-around",
              alignItems: "center",
            }}
          >
            <TouchableOpacity
              style={{
                width: "50%",
                borderRightWidth: 2,
                borderRightColor: "#fff",
              }}
            >
              <Text style={styles.tab}>TẤT CẢ</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{ width: "50%" }}>
              <Text style={styles.tab}>YÊU THÍCH</Text>
            </TouchableOpacity>
          </View>
        </ImageBackground>
      </View>
      <FlatList style={{padding: 20}}>
        <BusInfo />
      </FlatList>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // backgroundColor: "#214083",
    height: ScreenHeight,
  },
  header: {},
  title: {
    paddingLeft: 20,
    color: "white",
    fontSize: 22,
    fontWeight: 500,
  },
  img: {
    width: "100%",
    height: 220,
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
    overflow: "hidden",
  },
  tab: {
    fontSize: 20,
    fontWeight: 600,
    color: "#fff",
    alignSelf: "center",
  },
});
